/* Zielansprache – Prototyp */
(function () {
  "use strict";

  const VIEWS = ["front", "side", "rear", "oblique", "top"];
  const VIEW_LABEL = { front: "Front", side: "Seite", rear: "Heck", oblique: "Schräg", top: "Oben" };
  const KLASSE = [
    ["KPz", "Kampfpanzer"],
    ["SPz", "Schützenpanzer"],
    ["TPz", "Rad / TPz"],
    ["Aufkl", "Aufklärung / leicht"],
    ["SPH", "Artillerie"],
    ["Flak", "Flugabwehr"],
    ["MRAP", "MRAP"],
  ];
  const PRESETS = [
    { id: "gemischt", label: "Gemischt", klasse: [], seite: [], aera: [] },
    { id: "kpz-fof", label: "Kampfpanzer, Freund gegen Feind", klasse: ["KPz"], seite: [], aera: [] },
    { id: "kpz", label: "Nur Kampfpanzer", klasse: ["KPz"], seite: [], aera: [] },
    { id: "spz", label: "Nur Schützenpanzer", klasse: ["SPz"], seite: [], aera: [] },
    { id: "rad", label: "Nur Radfahrzeuge", klasse: [], seite: [], aera: [], rad: true },
    { id: "de", label: "Nur Bundeswehr", klasse: [], seite: ["DE"], aera: [] },
    { id: "nato", label: "Nur NATO", klasse: [], seite: ["NATO"], aera: [] },
    { id: "ru", label: "Nur Russland", klasse: [], seite: ["RU"], aera: [] },
    { id: "modern", label: "Nur Modern", klasse: [], seite: [], aera: ["Modern"] },
    { id: "legacy", label: "Nur Legacy", klasse: [], seite: [], aera: ["Legacy"] },
  ];
  const VIEW_MODES = [
    { id: "swipe", label: "Wischen an" },
    { id: "lock-random", label: "Ansicht gesperrt, Zufall" },
    { id: "lock-front", label: "Nur Front" },
    { id: "lock-side", label: "Nur Seite" },
    { id: "lock-rear", label: "Nur Heck" },
    { id: "lock-top", label: "Nur Draufsicht" },
  ];

  const state = {
    preset: "gemischt",
    klasse: [],
    seite: [],
    aera: [],
    rad: false,
    viewMode: "swipe",
    mode: "quiz",
    q: 0,
    total: 12,
    score: 0,
    streak: 0,
    time: 20,
    timer: null,
    current: null,
    viewIdx: 0,
    revealed: 1,
    locked: false,
    answers: [],
    fofStep: "side",
    daily: false,
    duel: { p1: 0, p2: 0, goal: 5, buzz: null, current: null, answers: [], q: 0 },
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const vehicles = () => (window.ZA_VEHICLES || []).filter((v) => v.images && v.images.length);

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("on");
    setTimeout(() => t.classList.remove("on"), 1800);
  }

  function tickClocks() {
    const now = new Date();
    const s = now.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" });
    $$("[data-clock]").forEach((el) => (el.textContent = s));
  }

  function show(id) {
    $$(".screen").forEach((s) => s.classList.toggle("on", s.id === "sc-" + id));
    window.scrollTo(0, 0);
  }

  function stopTimer() {
    if (state.timer) clearInterval(state.timer);
    state.timer = null;
  }

  /* ---------- pool ---------- */
  function inPool(v) {
    if (state.klasse.length && !state.klasse.includes(v.typ) && !(state.klasse.includes("TPz") && (v.typ === "TPz" || v.typ === "JPz"))) return false;
    if (state.rad && v.antrieb !== "Rad" && v.antrieb !== "Lkw") return false;
    if (state.seite.length && !state.seite.includes(v.bloc) && !state.seite.includes(v.seite)) return false;
    if (state.aera.length && !state.aera.includes(v.aera)) return false;
    if (!v.images || !v.images.length) return false;
    return true;
  }
  function pool() {
    const all = vehicles();
    const p = all.filter(inPool);
    return p.length ? p : all;
  }

  function viewAllowed(img, mode) {
    if (mode === "swipe" || mode === "lock-random") return true;
    const want = mode.replace("lock-", "");
    return img.view === want;
  }

  function imagesFor(v, mode) {
    const imgs = v.images || [];
    if (mode === "swipe") return imgs;
    if (mode === "lock-random") return imgs;
    const want = mode.replace("lock-", "");
    const hit = imgs.filter((i) => i.view === want);
    return hit.length ? hit : imgs;
  }

  function pickLockedImage(v, mode) {
    const imgs = imagesFor(v, mode);
    if (mode === "lock-random" || mode === "swipe") return Math.floor(Math.random() * imgs.length);
    return 0;
  }

  /* ---------- categories UI ---------- */
  function renderCats() {
    const pre = $("#presets");
    pre.innerHTML = "";
    PRESETS.forEach((p) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.preset === p.id ? " on" : "");
      b.textContent = p.label;
      b.onclick = () => {
        state.preset = p.id;
        state.klasse = p.klasse.slice();
        state.seite = p.seite.slice();
        state.aera = p.aera.slice();
        state.rad = !!p.rad;
        renderCats();
      };
      pre.appendChild(b);
    });
    function chips(el, items, arr, key) {
      el.innerHTML = "";
      items.forEach(([val, label]) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "chip" + (arr.includes(val) ? " on" : "");
        b.textContent = label;
        b.onclick = () => {
          state.preset = "custom";
          const i = arr.indexOf(val);
          if (i >= 0) arr.splice(i, 1);
          else arr.push(val);
          if (key === "rad") state.rad = false;
          renderCats();
        };
        el.appendChild(b);
      });
    }
    chips($("#chip-klasse"), KLASSE, state.klasse, "klasse");
    const radBtn = document.createElement("button");
    radBtn.type = "button";
    radBtn.className = "chip" + (state.rad ? " on" : "");
    radBtn.textContent = "Nur Rad / Lkw";
    radBtn.onclick = () => {
      state.preset = "custom";
      state.rad = !state.rad;
      renderCats();
    };
    $("#chip-klasse").appendChild(radBtn);

    chips($("#chip-seite"), [
      ["DE", "Bundeswehr"],
      ["NATO", "NATO"],
      ["UA", "Ukraine"],
      ["RU", "Russland / Ostblock"],
      ["Freund", "Freund"],
      ["Feind", "Feind"],
    ], state.seite, "seite");
    chips($("#chip-aera"), [
      ["Modern", "Modern"],
      ["Legacy", "Legacy"],
    ], state.aera, "aera");

    const vw = $("#chip-view");
    vw.innerHTML = "";
    VIEW_MODES.forEach((m) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.viewMode === m.id ? " on" : "");
      b.textContent = m.label;
      b.onclick = () => {
        state.viewMode = m.id;
        renderCats();
      };
      vw.appendChild(b);
    });

    const n = pool().length;
    $("#pool-count").innerHTML = n + ' <span>Typen</span>';
    const parts = [];
    if (state.rad) parts.push("nur Radfahrzeuge");
    else if (state.klasse.length) parts.push(state.klasse.join(", "));
    else parts.push("alle Klassen");
    if (state.seite.length) parts.push(state.seite.join(", "));
    else parts.push("alle Seiten");
    if (state.aera.length) parts.push(state.aera.join(", "));
    const vm = VIEW_MODES.find((m) => m.id === state.viewMode);
    $("#pool-summary").innerHTML =
      "Ausgewählt: <strong>" + n + " Fahrzeuge</strong>, " + parts.join(" · ") +
      ". Ansicht: <strong>" + (vm ? vm.label : state.viewMode) + "</strong>.";
  }

  /* ---------- media ---------- */
  function setPhoto(wrap, imgs, idx) {
    const img = wrap.querySelector("img");
    const cr = wrap.querySelector(".credit");
    const it = imgs[idx];
    if (!it) return;
    img.src = "img/" + it.file;
    img.alt = it.title || "Fahrzeugfoto";
    cr.textContent = "Foto: " + (it.author || "unbekannt") + " · " + (it.license || "") + " · Wikimedia Commons";
  }

  function renderDots(el, imgs, idx, swipe, onPick) {
    el.innerHTML = "";
    imgs.forEach((im, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot" + (i === idx ? " on" : "");
      b.innerHTML = "<i></i><span>" + (VIEW_LABEL[im.view] || im.view) + "</span>";
      if (!swipe && i !== idx) b.disabled = true;
      b.onclick = () => onPick && onPick(i);
      el.appendChild(b);
    });
  }

  function bindSwipe(wrap, getMax, getIdx, setIdx) {
    let x0 = null;
    wrap.onpointerdown = (e) => {
      x0 = e.clientX;
      try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
    };
    wrap.onpointerup = (e) => {
      if (x0 == null) return;
      const dx = e.clientX - x0;
      x0 = null;
      if (Math.abs(dx) < 40) return;
      const max = getMax();
      let i = getIdx();
      i = dx < 0 ? Math.min(max, i + 1) : Math.max(0, i - 1);
      setIdx(i);
    };
  }

  /* ---------- quiz ---------- */
  function shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }
  function distractors(correct, n) {
    const same = pool().filter((v) => v.id !== correct.id && v.typ === correct.typ);
    const rest = pool().filter((v) => v.id !== correct.id);
    const bag = same.concat(rest.filter((v) => !same.includes(v)));
    return shuffle(bag).slice(0, n);
  }

  function startQuiz(mode, opts) {
    opts = opts || {};
    stopTimer();
    state.mode = mode;
    state.daily = !!opts.daily;
    state.q = 0;
    state.total = opts.total || 12;
    state.score = 0;
    state.streak = 0;
    state.locked = false;
    if (state.daily) state._forcedView = "lock-random";
    else state._forcedView = null;
    $("#quiz-title").textContent = mode === "fof" ? "Freund oder Feind" : state.daily ? "Tägliche Aufgabe" : "Schnellquiz";
    nextQuestion();
    show("quiz");
  }

  function activeViewMode() {
    return state._forcedView || state.viewMode;
  }

  function nextQuestion() {
    stopTimer();
    const p = pool();
    if (!p.length) {
      toast("Kein Fahrzeug im Pool.");
      show("menu");
      return;
    }
    state.q += 1;
    if (state.q > state.total) {
      endRound();
      return;
    }
    const v = p[Math.floor(Math.random() * p.length)];
    const mode = activeViewMode();
    const imgs = imagesFor(v, mode);
    const idx = pickLockedImage(v, mode);
    state.current = v;
    state.imgs = imgs;
    state.viewIdx = idx;
    state.revealed = 1;
    state.locked = false;
    state.fofStep = "side";
    state.time = state.mode === "fof" ? 20 : 20;
    const opts = [v].concat(distractors(v, 3));
    state.answers = shuffle(opts);
    renderQuestion();
    state.timer = setInterval(() => {
      state.time -= 1;
      updateStats();
      if (state.time <= 0) {
        stopTimer();
        settle(false, 0, "Zeit abgelaufen");
      }
    }, 1000);
  }

  function updateStats() {
    $("#st-q").textContent = state.q + "/" + state.total;
    const t = Math.max(0, state.time);
    $("#st-t").textContent = "0:" + String(t).padStart(2, "0");
    $("#st-t").className = "v" + (t <= 5 ? " warn" : "");
    $("#st-s").textContent = String(state.score);
    $("#st-k").textContent = "×" + state.streak;
    $("#st-k").className = "v" + (state.streak >= 3 ? " hot" : "");
  }

  function canSwipe() {
    return activeViewMode() === "swipe" && !state.locked;
  }

  function revealView(i) {
    if (!canSwipe()) return;
    if (i === state.viewIdx) return;
    if (i < 0 || i >= state.imgs.length) return;
    state.viewIdx = i;
    state.revealed += 1;
    renderQuestion(true);
  }

  function renderQuestion(keepTimer) {
    updateStats();
    setPhoto($("#quiz-photo"), state.imgs, state.viewIdx);
    renderDots($("#quiz-dots"), state.imgs, state.viewIdx, canSwipe(), (i) => revealView(i));
    const swipe = canSwipe();
    $("#quiz-hint").textContent = swipe
      ? "Wischen für eine weitere Ansicht · jeweils –15 Pkt"
      : "Ansicht gesperrt";
    const box = $("#quiz-answers");
    box.innerHTML = "";
    if (state.mode === "fof" && state.fofStep === "side") {
      box.className = "answers";
      const row = document.createElement("div");
      row.className = "fof-row";
      ["Freund", "Feind"].forEach((s) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ans " + (s === "Freund" ? "freund-btn" : "feind-btn");
        b.textContent = s;
        b.onclick = () => answerFofSide(s);
        row.appendChild(b);
      });
      box.appendChild(row);
    } else {
      box.className = "answers";
      state.answers.forEach((v) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ans";
        b.textContent = v.name;
        b.onclick = () => answerType(v.id);
        box.appendChild(b);
      });
    }
  }

  function penalty() {
    return Math.max(0, (state.revealed - 1) * 15);
  }

  function answerFofSide(side) {
    if (state.locked) return;
    const ok = side === state.current.seite;
    if (!ok) {
      settle(false, 0, "Falsche Seite");
      return;
    }
    state.fofStep = "type";
    toast("Seite richtig – welcher Typ?");
    renderQuestion(true);
  }

  function answerType(id) {
    if (state.locked) return;
    const ok = id === state.current.id;
    const base = 100 + Math.max(0, state.time) * 2;
    const pts = ok ? Math.max(10, base - penalty()) : 0;
    settle(ok, pts, ok ? "Richtig" : "Falsch");
  }

  function settle(ok, pts, title) {
    if (state.locked) return;
    state.locked = true;
    stopTimer();
    if (ok) {
      state.streak += 1;
      const bonus = state.streak >= 3 ? Math.round(pts * 0.2) : 0;
      pts += bonus;
      state.score += pts;
    } else {
      state.streak = 0;
    }
    // highlight
    $$("#quiz-answers .ans").forEach((b) => {
      const t = b.textContent;
      if (t === state.current.name || t === state.current.seite) b.classList.add("good");
      else if (b === document.activeElement) b.classList.add("bad");
    });
    setTimeout(() => showResult(ok, pts, title), 380);
  }

  function showResult(ok, pts, title) {
    const b = $("#res-banner");
    b.className = "banner" + (ok ? "" : " fail");
    $("#res-h").textContent = title || (ok ? "Richtig" : "Falsch");
    $("#res-pts").innerHTML = (ok ? "+" : "") + pts + " Pkt<small>Serie ×" + state.streak + " · " + state.q + " von " + state.total + "</small>";
    fillSteckbrief("res", state.current, true);
    const last = state.q >= state.total;
    $("#res-next").textContent = last ? "Auswertung" : "Nächste Frage";
    $("#res-next").onclick = () => {
      if (last) endRound();
      else {
        nextQuestion();
        show("quiz");
      }
    };
    show("result");
  }

  function fillSteckbrief(prefix, v, swipe) {
    let idx = 0;
    function paint() {
      setPhoto($("#" + prefix + "-photo"), v.images, idx);
      renderDots($("#" + prefix + "-dots"), v.images, idx, !!swipe, (i) => {
        idx = i;
        paint();
      });
    }
    paint();
    bindSwipe($("#" + prefix + "-photo"), () => v.images.length - 1, () => idx, (i) => {
      idx = i;
      paint();
    });
    $("#" + prefix + "-name").textContent = v.name;
    const tags = [v.typ, v.nation, v.seite, v.aera, v.antrieb];
    $("#" + prefix + "-tags").innerHTML = tags
      .map((t) => '<span class="tag' + (t === "Freund" ? " freund" : t === "Feind" ? " feind" : "") + '">' + t + "</span>")
      .join("");
    $("#" + prefix + "-feat").innerHTML = (v.merkmale || []).map((m) => "<li>" + m + "</li>").join("");
    $("#" + prefix + "-note").textContent = v.verwechslung || "";
  }

  function endRound() {
    stopTimer();
    saveScore(state.mode === "fof" ? "fof" : state.daily ? "daily" : "quiz", state.score, state.streak);
    const v = state.current;
    $("#res-banner").className = "banner";
    $("#res-h").textContent = "Runde vorbei";
    $("#res-pts").innerHTML = state.score + " Pkt<small>Beste Serie ×" + /* not tracked max */ state.streak + "</small>";
    if (v) fillSteckbrief("res", v, true);
    $("#res-next").textContent = "Neue Runde";
    $("#res-next").onclick = () => startQuiz(state.mode, { daily: state.daily, total: state.total });
    show("result");
  }

  /* ---------- learn ---------- */
  function renderLearn() {
    const list = pool();
    $("#learn-count").innerHTML = list.length + " <span>Typen</span>";
    const el = $("#learn-list");
    el.innerHTML = "";
    list.forEach((v) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "learn-item";
      const src = v.images[0] ? "img/" + v.images[0].file : "";
      b.innerHTML = '<img src="' + src + '" alt=""><div><h2>' + v.name + "</h2><p>" + v.typ + " · " + v.nation + " · " + v.seite + "</p></div>";
      b.onclick = () => {
        $("#res-banner").className = "banner";
        $("#res-h").textContent = "Steckbrief";
        $("#res-pts").innerHTML = "<small>Lernmodus · Wischen frei</small>";
        fillSteckbrief("res", v, true);
        $("#res-next").textContent = "Zurück zur Liste";
        $("#res-next").onclick = () => show("learn");
        show("result");
      };
      el.appendChild(b);
    });
    show("learn");
  }

  /* ---------- duel ---------- */
  function loadDuelPrefs() {
    try {
      const p = JSON.parse(localStorage.getItem("za-duel") || "{}");
      return {
        mode: p.mode === "answers" ? "answers" : "call",
        goal: p.goal === 10 ? 10 : 5,
      };
    } catch (_) {
      return { mode: "call", goal: 5 };
    }
  }
  function saveDuelPrefs() {
    localStorage.setItem("za-duel", JSON.stringify({ mode: state.duel.mode, goal: state.duel.goal }));
  }

  const DUEL_NOTES = {
    call: "Wer zuerst buzzert, sagt laut, was es ist. Der andere tippt auf Richtig oder Falsch. Liegt der Erste daneben, darf der Zweite antworten und bekommt bei richtiger Antwort doppelte Punkte.",
    answers: "Wer zuerst buzzert, wählt aus vier Antworten. Richtige Antwort: 1 Punkt. Falsche Antwort: der andere bekommt den Punkt.",
  };

  function renderDuelSetup() {
    const prefs = loadDuelPrefs();
    state.duel.mode = prefs.mode;
    state.duel.goal = prefs.goal;
    const modeBox = $("#duel-mode-chips");
    modeBox.innerHTML = "";
    [
      { id: "call", label: "Ansage" },
      { id: "answers", label: "Mit Antworten" },
    ].forEach((m) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.duel.mode === m.id ? " on" : "");
      b.textContent = m.label;
      b.onclick = () => {
        state.duel.mode = m.id;
        saveDuelPrefs();
        renderDuelSetup();
      };
      modeBox.appendChild(b);
    });
    $("#duel-mode-note").textContent = DUEL_NOTES[state.duel.mode] || DUEL_NOTES.call;
    const goalBox = $("#duel-goal-chips");
    goalBox.innerHTML = "";
    [5, 10].forEach((g) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.duel.goal === g ? " on" : "");
      b.textContent = "Zuerst " + g;
      b.onclick = () => {
        state.duel.goal = g;
        saveDuelPrefs();
        renderDuelSetup();
      };
      goalBox.appendChild(b);
    });
    show("duel-setup");
  }

  function startDuel() {
    stopTimer();
    const prefs = loadDuelPrefs();
    state.duel = {
      p1: 0,
      p2: 0,
      goal: prefs.goal,
      mode: prefs.mode,
      buzz: null,
      first: null,
      current: null,
      img: null,
      answers: [],
      q: 0,
      phase: "buzz",
      awardText: "",
      over: false,
      advancing: false,
    };
    $("#sc1").textContent = "0";
    $("#sc2").textContent = "0";
    show("duel");
    duelNext();
  }

  function duelSetMeta() {
    const d = state.duel;
    const modeLabel = d.mode === "answers" ? "Mit Antworten" : "Ansage";
    ["1", "2"].forEach((n) => {
      $("#meta" + n).textContent = "Frage " + d.q + " · Bis " + d.goal + " · " + modeLabel + " · Ansicht gesperrt";
    });
  }

  function duelClearSol() {
    ["1", "2"].forEach((n) => {
      const s = $("#sol" + n);
      s.hidden = true;
      s.innerHTML = "";
    });
  }

  function duelShowSol() {
    const v = state.duel.current;
    ["1", "2"].forEach((n) => {
      const s = $("#sol" + n);
      s.hidden = false;
      s.innerHTML = '<div class="lbl">Lösung</div><h3>' + v.name + '</h3><div class="sub">' + v.typ + " · " + v.nation + "</div>";
    });
  }

  function duelPaintScores() {
    $("#sc1").textContent = String(state.duel.p1);
    $("#sc2").textContent = String(state.duel.p2);
  }

  function duelRenderPhase() {
    const d = state.duel;
    const p = d.phase;
    const act = (n, html) => {
      $("#act" + n).innerHTML = html;
    };
    if (p === "buzz") {
      duelClearSol();
      act(1, '<button type="button" class="buzzer" data-buzz="1">Buzzer</button>');
      act(2, '<button type="button" class="buzzer" data-buzz="2">Buzzer</button>');
      return;
    }
    if (p === "wait-call") {
      const who = d.first;
      const other = who === 1 ? 2 : 1;
      duelClearSol();
      act(who, '<button type="button" class="said-btn" data-said="1">Gesagt</button>');
      act(other, '<div class="duel-wait">Spieler ' + who + " sagt die Lösung …</div>");
      return;
    }
    if (p === "judge") {
      const who = d.first;
      const other = who === 1 ? 2 : 1;
      duelShowSol();
      act(who, '<div class="duel-wait">Warten auf die Bewertung</div>');
      act(other, '<div class="judge-row"><button type="button" class="judge-btn ok" data-judge="ok">Richtig</button><button type="button" class="judge-btn no" data-judge="no">Falsch</button></div>');
      return;
    }
    if (p === "wait-call2") {
      const who = d.first;
      const other = who === 1 ? 2 : 1;
      duelClearSol();
      act(other, '<button type="button" class="said-btn" data-said="2">Gesagt</button>');
      act(who, '<div class="duel-wait">Spieler ' + other + " sagt die Lösung …</div>");
      return;
    }
    if (p === "judge2") {
      const who = d.first;
      const other = who === 1 ? 2 : 1;
      duelShowSol();
      act(other, '<div class="duel-wait">Warten auf die Bewertung</div>');
      act(who, '<div class="judge-row"><button type="button" class="judge-btn ok" data-judge2="ok">Richtig</button><button type="button" class="judge-btn no" data-judge2="no">Falsch</button></div>');
      return;
    }
    if (p === "answers") {
      const who = d.first;
      const other = who === 1 ? 2 : 1;
      duelClearSol();
      let html = '<div class="answers">';
      d.answers.forEach((v) => {
        html += '<button type="button" class="ans" data-ans="' + v.id + '">' + v.name + "</button>";
      });
      html += "</div>";
      act(who, html);
      act(other, '<div class="duel-wait">Spieler ' + who + " antwortet …</div>");
      return;
    }
    if (p === "brief" || p === "win") {
      const v = d.current;
      const feat = (v.merkmale || []).slice(0, 3).map((m) => "<li>" + m + "</li>").join("");
      duelShowSol();
      if (p === "win") {
        const w = d.p1 >= d.goal ? 1 : 2;
        const html =
          '<div class="duel-brief"><strong>Spieler ' + w + " gewinnt</strong>" +
          '<div class="duel-award">' + d.p1 + " : " + d.p2 + "</div>" +
          "<p>" + (d.awardText || "") + "</p></div>" +
          '<button type="button" class="said-btn" data-duel-again>Nochmal</button>' +
          '<button type="button" class="cta ghost" data-go="menu" style="margin-top:8px">Zum Menü</button>';
        act(1, html);
        act(2, html);
        return;
      }
      const html =
        '<div class="duel-brief"><strong>' + v.name + "</strong> · " + v.typ + " · " + v.nation +
        "<ul>" + feat + "</ul>" +
        '<div class="duel-award">' + (d.awardText || "") + "</div></div>" +
        '<button type="button" class="said-btn" data-duel-next>Weiter</button>';
      act(1, html);
      act(2, html);
    }
  }

  function duelNext() {
    const p = pool();
    const v = p[Math.floor(Math.random() * p.length)];
    const imgs = imagesFor(v, "lock-random");
    const idx = Math.floor(Math.random() * imgs.length);
    const d = state.duel;
    d.current = v;
    d.img = imgs[idx];
    d.answers = shuffle([v].concat(distractors(v, 3)));
    d.buzz = null;
    d.first = null;
    d.q += 1;
    d.phase = "buzz";
    d.awardText = "";
    d.over = false;
    d.advancing = false;
    const it = imgs[idx];
    ["1", "2"].forEach((n) => {
      $("#img" + n).src = "img/" + it.file;
      $("#cr" + n).textContent = "Foto: " + it.author + " · " + it.license;
    });
    duelSetMeta();
    duelRenderPhase();
  }

  function duelBuzz(who) {
    const d = state.duel;
    if (!d || d.phase !== "buzz" || d.buzz) return;
    d.buzz = who;
    d.first = who;
    if (d.mode === "answers") d.phase = "answers";
    else d.phase = "wait-call";
    duelRenderPhase();
  }

  function duelSaid(step) {
    const d = state.duel;
    if (step === 1 && d.phase === "wait-call") {
      d.phase = "judge";
      duelRenderPhase();
    } else if (step === 2 && d.phase === "wait-call2") {
      d.phase = "judge2";
      duelRenderPhase();
    }
  }

  function duelGoBrief() {
    const d = state.duel;
    if (d.p1 >= d.goal || d.p2 >= d.goal) {
      d.phase = "win";
      d.over = true;
      saveScore("duel", Math.max(d.p1, d.p2), 0);
    } else {
      d.phase = "brief";
    }
    duelPaintScores();
    duelRenderPhase();
  }

  function duelJudge(ok) {
    const d = state.duel;
    if (d.phase !== "judge") return;
    if (ok) {
      d["p" + d.first] += 1;
      d.awardText = "Spieler " + d.first + ": +1";
      duelGoBrief();
    } else {
      d.phase = "wait-call2";
      duelRenderPhase();
    }
  }

  function duelJudge2(ok) {
    const d = state.duel;
    if (d.phase !== "judge2") return;
    const other = d.first === 1 ? 2 : 1;
    if (ok) {
      d["p" + other] += 2;
      d.awardText = "Spieler " + other + ": +2 (doppelt)";
    } else {
      d.awardText = "Beide daneben · 0 Punkte";
    }
    duelGoBrief();
  }

  function duelAnswer(who, id) {
    const d = state.duel;
    if (d.phase !== "answers" || who !== d.first) return;
    const ok = id === d.current.id;
    if (ok) {
      d["p" + who] += 1;
      d.awardText = "Spieler " + who + ": +1";
    } else {
      const other = who === 1 ? 2 : 1;
      d["p" + other] += 1;
      d.awardText = "Falsch · Spieler " + other + ": +1";
    }
    duelGoBrief();
  }

  function duelAdvance() {
    const d = state.duel;
    if (!d || d.advancing) return;
    if (d.phase !== "brief") return;
    d.advancing = true;
    duelNext();
  }

  /* ---------- credits / scores ---------- */
  function renderCredits() {
    const imgs = [];
    vehicles().forEach((v) => v.images.forEach((im) => imgs.push({ v, im })));
    let html = "<p>Nur frei lizenzierte Fotos von Wikimedia Commons. Jede Datei wurde über die Dateiseite bzw. die Commons-API auf die Lizenz geprüft. Bearbeitungen: Verkleinern auf ca. 1200 Pixel Breite; bearbeitet: Kennzeichen unkenntlich gemacht. Bei CC BY-SA gilt Share-Alike für die bearbeitete Datei.</p>";
    html += "<p>Zielansprache ist ein inoffizieller Prototyp und steht in keiner Verbindung zur Bundeswehr oder zu anderen Streitkräften.</p>";
    html += "<h2>" + imgs.length + " Bilder</h2><ol>";
    imgs.forEach(({ v, im }) => {
      html += "<li><strong>" + v.name + "</strong> (" + (VIEW_LABEL[im.view] || im.view) + ") — " +
        (im.author || "unbekannt") + " · " + im.license +
        (im.source ? ' · <a href="' + im.source + '" target="_blank" rel="noopener">Quelle</a>' : "") +
        (im.edited ? " · " + im.edited : "") +
        "</li>";
    });
    html += "</ol>";
    $("#credits-body").innerHTML = html;
    show("credits");
  }

  function loadScores() {
    try {
      return JSON.parse(localStorage.getItem("za-scores") || "{}");
    } catch (_) {
      return {};
    }
  }
  function saveScore(kind, score, streak) {
    const all = loadScores();
    all[kind] = all[kind] || [];
    all[kind].push({ score, streak, at: new Date().toISOString() });
    all[kind] = all[kind].sort((a, b) => b.score - a.score).slice(0, 8);
    localStorage.setItem("za-scores", JSON.stringify(all));
  }
  function renderScores() {
    const all = loadScores();
    function fill(id, key) {
      const el = $(id);
      const rows = all[key] || [];
      el.innerHTML = rows.length
        ? rows.map((r) => "<li><span>" + new Date(r.at).toLocaleString("de-DE", { timeZone: "Europe/Berlin" }) + "</span><strong>" + r.score + " Pkt</strong></li>").join("")
        : "<li>Noch kein Eintrag</li>";
    }
    fill("#hs-quiz", "quiz");
    fill("#hs-fof", "fof");
    fill("#hs-daily", "daily");
    show("scores");
  }

  /* ---------- events ---------- */
  function go(name) {
    stopTimer();
    if (name === "menu") show("menu");
    else if (name === "cats") {
      renderCats();
      show("cats");
    } else if (name === "quiz") startQuiz("quiz");
    else if (name === "fof") startQuiz("fof");
    else if (name === "daily") startQuiz("quiz", { daily: true, total: 12 });
    else if (name === "learn") renderLearn();
    else if (name === "duel") renderDuelSetup();
    else if (name === "credits") renderCredits();
    else if (name === "scores") renderScores();
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]");
    if (!b) return;
    go(b.getAttribute("data-go"));
  });
  $("#quiz-close").onclick = () => {
    stopTimer();
    if (state.q > 1) endRound();
    else show("menu");
  };
  $("#duel-start").onclick = startDuel;
  $("#sc-duel").addEventListener("click", (e) => {
    const buzz = e.target.closest("[data-buzz]");
    if (buzz) {
      duelBuzz(Number(buzz.getAttribute("data-buzz")));
      return;
    }
    const said = e.target.closest("[data-said]");
    if (said) {
      duelSaid(Number(said.getAttribute("data-said")));
      return;
    }
    const j = e.target.closest("[data-judge]");
    if (j) {
      duelJudge(j.getAttribute("data-judge") === "ok");
      return;
    }
    const j2 = e.target.closest("[data-judge2]");
    if (j2) {
      duelJudge2(j2.getAttribute("data-judge2") === "ok");
      return;
    }
    const ans = e.target.closest("[data-ans]");
    if (ans) {
      duelAnswer(state.duel.first, ans.getAttribute("data-ans"));
      return;
    }
    if (e.target.closest("[data-duel-next]")) {
      duelAdvance();
      return;
    }
    if (e.target.closest("[data-duel-again]")) {
      startDuel();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      stopTimer();
      show("menu");
      return;
    }
    const quizOn = $("#sc-quiz").classList.contains("on");
    if (quizOn && canSwipe()) {
      if (e.key === "ArrowRight") revealView(state.viewIdx + 1);
      if (e.key === "ArrowLeft") revealView(state.viewIdx - 1);
    }
    if (quizOn && !state.locked && ["1", "2", "3", "4"].includes(e.key)) {
      const btns = $$("#quiz-answers .ans");
      const b = btns[Number(e.key) - 1];
      if (b) b.click();
    }
    const duelOn = $("#sc-duel").classList.contains("on");
    if (duelOn) {
      const phase = state.duel && state.duel.phase;
      const p1key = e.code === "Space" || e.key === "m" || e.key === "M";
      const p2key = e.key === "q" || e.key === "Q";
      if (p1key || p2key) e.preventDefault();
      if (phase === "buzz") {
        if (p1key) duelBuzz(1);
        if (p2key) duelBuzz(2);
      } else if (phase === "wait-call") {
        if ((p1key && state.duel.first === 1) || (p2key && state.duel.first === 2)) duelSaid(1);
      } else if (phase === "wait-call2") {
        const other = state.duel.first === 1 ? 2 : 1;
        if ((p1key && other === 1) || (p2key && other === 2)) duelSaid(2);
      } else if (phase === "brief" && (p1key || p2key)) {
        duelAdvance();
      }
    }
  });

  bindSwipe(
    $("#quiz-photo"),
    () => (state.imgs ? state.imgs.length - 1 : 0),
    () => state.viewIdx,
    (i) => revealView(i)
  );

  /* ---------- boot ---------- */
  function boot() {
    tickClocks();
    setInterval(tickClocks, 15000);
    const all = vehicles();
    const hero = all.find((v) => v.id === "leo2a5") || all[0];
    if (hero && hero.images[0]) {
      $("#hero-img").src = "img/" + hero.images[0].file;
      $("#hero-img").alt = hero.name;
    }
    $("#daily-sub").textContent = all.length + " Typen im Prototyp · festes Bild";
    renderCats();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
