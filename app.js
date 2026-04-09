const dimensions = [
  { key: "drive", label: "上头值" },
  { key: "social", label: "社交值" },
  { key: "risk", label: "冲锋值" },
  { key: "emotion", label: "外放值" },
  { key: "control", label: "控场值" },
];

const questions = [
  {
    tag: "周一早会",
    text: "领导突然问，这周谁来主动顶一个最难的活？",
    options: [
      { title: "我来试试", note: "先接住，边做边想办法。", scores: { drive: 2, risk: 2, control: 1 } },
      { title: "先看边界", note: "活不是不能接，但先把坑位问清楚。", scores: { risk: -1, control: 2, emotion: -1 } },
    ],
  },
  {
    tag: "群里通知",
    text: "项目群里一堆人已读不回，你通常会怎么处理？",
    options: [
      { title: "出来组织一下", note: "把人、时间、动作先排清楚。", scores: { social: 2, control: 2 } },
      { title: "默默把自己那部分先做完", note: "少说多做，别把自己卷进群聊泥潭。", scores: { drive: 1, social: -2, emotion: -1 } },
    ],
  },
  {
    tag: "需求突变",
    text: "甲方说方案今晚就要改版，你第一反应是？",
    options: [
      { title: "冲吧，先救火", note: "先把今晚过了，明天再复盘。", scores: { drive: 2, risk: 1, emotion: 1 } },
      { title: "先追问变化原因", note: "不想在错误方向上通宵。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "午饭时间",
    text: "同事开始吐槽老板，你在饭桌上一般是什么角色？",
    options: [
      { title: "主讲人", note: "素材丰富，情绪到位，大家都在等你开麦。", scores: { social: 2, emotion: 2 } },
      { title: "冷静旁听", note: "点到为止，少给聊天记录留把柄。", scores: { social: -1, emotion: -2, control: 1 } },
    ],
  },
  {
    tag: "临时汇报",
    text: "下午 5 点被拉去临时汇报，你更像哪种人？",
    options: [
      { title: "现场组织语言型", note: "临时上台也能讲得有模有样。", scores: { social: 1, emotion: 1, control: 2 } },
      { title: "提前写提纲型", note: "不给我 10 分钟整理，我会觉得不尊重。", scores: { control: 2, emotion: -1 } },
    ],
  },
  {
    tag: "工作流",
    text: "碰到新活，你通常先做哪一步？",
    options: [
      { title: "先开干", note: "做着做着就清楚了。", scores: { drive: 2, risk: 1 } },
      { title: "先拆任务", note: "步骤一清晰，后面就没那么乱。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "工位气场",
    text: "你在办公室最常出现的状态是？",
    options: [
      { title: "耳机一戴，生人勿近", note: "不要打断我，我在和命运对线。", scores: { social: -2, drive: 1 } },
      { title: "走来走去，顺手串场", note: "我不一定在摸鱼，但我一定在流动。", scores: { social: 2, emotion: 1 } },
    ],
  },
  {
    tag: "背锅现场",
    text: "一个锅空降到你面前，你通常怎么接？",
    options: [
      { title: "接了再说", note: "先保住局面，别让事情炸开。", scores: { drive: 1, emotion: 1, risk: 1 } },
      { title: "先划清边界", note: "锅不是不能背，但责任要记账。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "群体任务",
    text: "多人协作时，你最舒服的位置是？",
    options: [
      { title: "拉齐节奏的人", note: "谁慢了谁歪了，我会马上发现。", scores: { social: 1, control: 2 } },
      { title: "关键一环的人", note: "给我明确交付，我能默默补上。", scores: { drive: 2, social: -1 } },
    ],
  },
  {
    tag: "踩点心理",
    text: "DDL 快到了，你的状态更接近？",
    options: [
      { title: "越近越来劲", note: "没有压迫感就没有灵感。", scores: { drive: 2, risk: 2 } },
      { title: "心率先上来", note: "我会开始找最稳的收尾路径。", scores: { control: 1, risk: -2, emotion: -1 } },
    ],
  },
  {
    tag: "老板一句话",
    text: "老板说“这个你看着办吧”，你会？",
    options: [
      { title: "当作授权", note: "自由度到手，先把结果做出来。", scores: { drive: 1, risk: 1, control: 1 } },
      { title: "当作风险信号", note: "不写清楚，我晚上都睡不踏实。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "开会表现",
    text: "开到第 40 分钟还没结论时，你最可能？",
    options: [
      { title: "主动收口", note: "我来总结，咱们别无限循环。", scores: { control: 2, social: 1 } },
      { title: "继续观察", note: "先看谁最急，谁先露底牌。", scores: { social: -1, control: 1, emotion: -1 } },
    ],
  },
  {
    tag: "情绪管理",
    text: "被临时甩锅或者误解时，你更容易？",
    options: [
      { title: "当场有点炸", note: "我先不一定骂人，但脸色会说明一切。", scores: { emotion: 2 } },
      { title: "表面平静记小账", note: "没事，我都记着。", scores: { emotion: -1, control: 1 } },
    ],
  },
  {
    tag: "同事关系",
    text: "新同事来了，你通常会？",
    options: [
      { title: "主动搭话带一带", note: "人先熟了，后面事情都好办。", scores: { social: 2, emotion: 1 } },
      { title: "等对方来找我", note: "我不是冷漠，我只是不乱社交。", scores: { social: -2 } },
    ],
  },
  {
    tag: "汇报风格",
    text: "做工作汇报时，你更想突出什么？",
    options: [
      { title: "结果和气势", note: "先让对面知道这事成了。", scores: { emotion: 1, control: 1, drive: 1 } },
      { title: "过程和证据", note: "最好别人挑不出逻辑毛病。", scores: { control: 2, emotion: -1 } },
    ],
  },
  {
    tag: "协作风格",
    text: "同伴卡壳时，你一般会？",
    options: [
      { title: "过去一起救", note: "先把人从坑里拉出来再说。", scores: { social: 2, drive: 1 } },
      { title: "给框架和建议", note: "我帮你理思路，但不替你全做。", scores: { control: 2, social: -1 } },
    ],
  },
  {
    tag: "办公室传说",
    text: "别人怎么评价你的工作风格更贴切？",
    options: [
      { title: "这人能扛事", note: "不一定最安静，但关键时刻真会上。", scores: { drive: 2, risk: 1 } },
      { title: "这人很有数", note: "不轻易表态，但表态通常靠谱。", scores: { control: 2, emotion: -1 } },
    ],
  },
  {
    tag: "群聊节奏",
    text: "项目群突然安静了，你通常会？",
    options: [
      { title: "发一句推进", note: "别躺了，谁来认领一下。", scores: { social: 1, control: 2, emotion: 1 } },
      { title: "单独私聊关键人", note: "公开催容易散，私下点名更有效。", scores: { control: 2, social: -1 } },
    ],
  },
  {
    tag: "创新偏好",
    text: "一个方案有点冒险但可能很出彩，你通常？",
    options: [
      { title: "想试", note: "平平无奇比失败更难受。", scores: { risk: 2, drive: 1 } },
      { title: "想保底", note: "先有底线方案，再谈花活。", scores: { risk: -2, control: 1 } },
    ],
  },
  {
    tag: "下班时刻",
    text: "快下班时又冒出一件急活，你会？",
    options: [
      { title: "继续干完", note: "既然上线了，那就把状态烧到底。", scores: { drive: 2, emotion: 1 } },
      { title: "快速评估，明早处理", note: "不是所有急都是真的急。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "社交能量",
    text: "团建时你更像哪一类？",
    options: [
      { title: "带节奏的人", note: "没有我，这桌会安静很多。", scores: { social: 2, emotion: 2 } },
      { title: "稳定出现的人", note: "我会到场，但不必让我跳上桌。", scores: { social: -1, emotion: -1 } },
    ],
  },
  {
    tag: "任务认知",
    text: "你怎么看“这活不是我职责，但没人做”？",
    options: [
      { title: "我可能会接", note: "事情总得有人推进。", scores: { drive: 2, social: 1, risk: 1 } },
      { title: "先看值不值得", note: "善良可以，白给不行。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "危机时刻",
    text: "出问题时，你最想先抓住什么？",
    options: [
      { title: "动作", note: "先让现场别继续变糟。", scores: { drive: 2, risk: 1 } },
      { title: "原因", note: "我得先知道坑是怎么来的。", scores: { control: 2, risk: -1 } },
    ],
  },
  {
    tag: "个人名片",
    text: "如果同事只能用一句话记住你，你更希望是？",
    options: [
      { title: "关键时刻很顶", note: "平时随便，真打仗的时候我会站出来。", scores: { drive: 2, emotion: 1 } },
      { title: "这个人很稳", note: "把事情交给我，至少不会离谱。", scores: { control: 2, risk: -1, emotion: -1 } },
    ],
  },
];

const archetypes = [
  {
    code: "BOSS",
    avatar: "./avatars/boss.svg",
    title: "控场总监",
    badge: "会议室天降紫微星",
    slogan: "只要你在场，空气里都会自动长出 agenda。",
    stamp: "控场系高发类型",
    accent: "#1F7A6B",
    summary: "你走到哪都像在开项目例会，混乱在你面前会自动排队。",
    description: "你不是单纯爱指挥，而是天然受不了低效。任务一乱、节奏一散、责任一糊，你就会想站出来把场子接住。",
    coworkerView: "同事嘴上说你像 PM，心里知道有你在时，事情确实不容易散架。",
    tags: ["控场上瘾", "收口达人", "会议终结者"],
    profile: { drive: 70, social: 68, risk: 52, emotion: 40, control: 95 },
  },
  {
    code: "TANK",
    avatar: "./avatars/tank.svg",
    title: "背锅坦克",
    badge: "高压场景指定接盘侠",
    slogan: "锅先别飞，你已经下意识伸手去接了。",
    stamp: "抗压系高发类型",
    accent: "#596A80",
    summary: "锅先接，场先稳，情绪晚点再说。你是团队的抗压外壳。",
    description: "你不一定最爱表现，但在真出问题的时候，你很难袖手旁观。你身上有一种“先别慌，我来顶一下”的气质。",
    coworkerView: "大家会不自觉把难题往你这边靠，因为你真的很像能扛住。",
    tags: ["关键时刻顶", "先救火再复盘", "抗压壳子"],
    profile: { drive: 88, social: 50, risk: 70, emotion: 54, control: 62 },
  },
  {
    code: "SHOW",
    avatar: "./avatars/show.svg",
    title: "气氛演王",
    badge: "办公室综艺感担当",
    slogan: "你不是在上班，你是在给工位配 BGM 和旁白。",
    stamp: "社交系高发类型",
    accent: "#FF6F61",
    summary: "你不仅在上班，也在给整个办公室提供情绪和戏剧张力。",
    description: "你擅长把沉闷局面盘活，也擅长把一个普通吐槽讲成连续剧。你是团队里的扩音器，也是团建里的天然发动机。",
    coworkerView: "有你在，办公室不无聊；没有你，群聊会像失去 BGM。",
    tags: ["情绪输出", "团建主舞台", "吐槽段子手"],
    profile: { drive: 58, social: 92, risk: 58, emotion: 95, control: 46 },
  },
  {
    code: "GHOST",
    avatar: "./avatars/ghost.svg",
    title: "工位隐身人",
    badge: "低存在感高交付体质",
    slogan: "平时像离线，交付时像突然从云里刷新出来。",
    stamp: "静默系高发类型",
    accent: "#536471",
    summary: "你看着安静，实际上在后台默默把很多关键零件补齐了。",
    description: "你不抢存在感，也不爱空转社交，但你通常知道自己在干什么。别人注意不到你的时候，反而是你效率最高的时候。",
    coworkerView: "平时像消失，交付时像突然从云里掏出一个完整答案。",
    tags: ["静音高效", "拒绝空聊", "存在感后置"],
    profile: { drive: 68, social: 18, risk: 36, emotion: 20, control: 78 },
  },
  {
    code: "BRAIN",
    avatar: "./avatars/brain.svg",
    title: "冷面军师",
    badge: "逻辑脑内置完整版",
    slogan: "别人还在吵，你已经在脑内画完流程图了。",
    stamp: "军师系高发类型",
    accent: "#5B6EE1",
    summary: "你不是最吵的那个，但通常是最先看懂局势的那个。",
    description: "你对边界、逻辑和因果关系很敏感。别人还在吵时，你已经在想真正的问题在哪里，以及最稳的修法是什么。",
    coworkerView: "你说话不多，但一开口往往就是“这事真正卡的点在这儿”。",
    tags: ["逻辑自洽", "稳健保底", "风险扫描仪"],
    profile: { drive: 52, social: 34, risk: 16, emotion: 18, control: 92 },
  },
  {
    code: "SPARK",
    avatar: "./avatars/spark.svg",
    title: "整活发动机",
    badge: "灵感和热闹双供给源",
    slogan: "你走到哪，哪里就开始像一个临时节目组。",
    stamp: "创意系高发类型",
    accent: "#73B44A",
    summary: "你是那种会把办公室做成真人秀副本的人，热闹和点子都很多。",
    description: "你喜欢流动、喜欢互相碰撞，也不怕把场面搞活。你的价值不只在执行，还在于给团队带来变化和动能。",
    coworkerView: "你可能偶尔分散注意力，但也常常顺手点燃了整个团队的气氛。",
    tags: ["气氛带电", "创意乱入", "走到哪聊到哪"],
    profile: { drive: 60, social: 84, risk: 66, emotion: 78, control: 42 },
  },
  {
    code: "HERO",
    avatar: "./avatars/hero.svg",
    title: "自燃卷王",
    badge: "DDL 充能型生物",
    slogan: "压力一来，你的战斗模式和黑眼圈会同时点亮。",
    stamp: "燃烧系高发类型",
    accent: "#F08B2D",
    summary: "别人是被推动，你是会自己点火。压力一来，你反而更像进入战斗模式。",
    description: "你对任务有天然的推进欲，一旦进入状态，很容易不知不觉把自己烧过头。你厉害，也容易累。",
    coworkerView: "大家一边心疼你太拼，一边庆幸关键节点有你这种人存在。",
    tags: ["自驱爆表", "压力增益", "高压推进器"],
    profile: { drive: 96, social: 44, risk: 74, emotion: 46, control: 72 },
  },
  {
    code: "HOLD",
    avatar: "./avatars/hold.svg",
    title: "精神股东",
    badge: "项目情绪持股人",
    slogan: "你未必永远在前线，但你永远精神上全仓。",
    stamp: "代入系高发类型",
    accent: "#B49B5F",
    summary: "你对团队有强烈参与感，虽然不一定时时冲前线，但一定时时在线上。",
    description: "你最强的是整体感和代入感。这个事成了你真高兴，炸了你也真上火。你像团队的情绪持股人。",
    coworkerView: "你未必永远在 C 位，但你对全局的关注度常常比当事人还高。",
    tags: ["全局入戏", "高度代入", "远程操心"],
    profile: { drive: 54, social: 72, risk: 44, emotion: 70, control: 68 },
  },
];

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  result: null,
};

const screens = {
  hero: document.querySelector("#hero-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const els = {
  startButton: document.querySelector("#start-button"),
  jumpResultButton: document.querySelector("#jump-result-button"),
  backHomeButton: document.querySelector("#back-home-button"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
  retryButton: document.querySelector("#retry-button"),
  retryTopButton: document.querySelector("#retry-top-button"),
  backTopButton: document.querySelector("#back-top-button"),
  shareButton: document.querySelector("#share-button"),
  questionTag: document.querySelector("#question-tag"),
  questionText: document.querySelector("#question-text"),
  optionList: document.querySelector("#option-list"),
  progressLabel: document.querySelector("#progress-label"),
  progressPercent: document.querySelector("#progress-percent"),
  progressFill: document.querySelector("#progress-fill"),
  resultTitle: document.querySelector("#result-title"),
  resultCode: document.querySelector("#result-code"),
  resultSummary: document.querySelector("#result-summary"),
  resultAvatar: document.querySelector("#result-avatar"),
  resultBadge: document.querySelector("#result-badge"),
  resultSlogan: document.querySelector("#result-slogan"),
  resultStamp: document.querySelector("#result-stamp"),
  resultDescription: document.querySelector("#result-description"),
  coworkerView: document.querySelector("#coworker-view"),
  resultTags: document.querySelector("#result-tags"),
  scoreList: document.querySelector("#score-list"),
  matchRate: document.querySelector("#match-rate"),
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
  });
}

function renderQuestion() {
  const question = questions[state.index];
  const answeredIndex = state.answers[state.index];
  const progress = ((state.index + 1) / questions.length) * 100;

  els.questionTag.textContent = question.tag;
  els.questionText.textContent = question.text;
  els.progressLabel.textContent = `第 ${state.index + 1} / ${questions.length} 题`;
  els.progressPercent.textContent = `${Math.round(progress)}%`;
  els.progressFill.style.width = `${progress}%`;

  els.optionList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answeredIndex === index) {
      button.classList.add("selected");
    }
    button.innerHTML = `<strong>${option.title}</strong><span>${option.note}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.index] = index;
      renderQuestion();
    });
    els.optionList.appendChild(button);
  });

  els.prevButton.disabled = state.index === 0;
  els.nextButton.textContent = state.index === questions.length - 1 ? "提交结果" : "下一题";
}

function clampScore(value) {
  return Math.max(0, Math.min(100, value));
}

function computeScores() {
  const raw = { drive: 0, social: 0, risk: 0, emotion: 0, control: 0 };

  questions.forEach((question, questionIndex) => {
    const chosen = state.answers[questionIndex];
    if (chosen === null) {
      return;
    }
    const scores = question.options[chosen].scores;
    Object.keys(scores).forEach((key) => {
      raw[key] += scores[key];
    });
  });

  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, clampScore(50 + value * 7)])
  );
}

function distance(a, b) {
  return dimensions.reduce((sum, dimension) => {
    const delta = a[dimension.key] - b[dimension.key];
    return sum + delta * delta;
  }, 0);
}

function getBestResult(scores) {
  const ranked = archetypes
    .map((item) => ({ ...item, delta: distance(scores, item.profile) }))
    .sort((left, right) => left.delta - right.delta);

  const best = ranked[0];
  const match = Math.max(63, Math.min(98, Math.round(100 - Math.sqrt(best.delta) * 0.9)));
  return { ...best, match };
}

function renderResult() {
  const scores = computeScores();
  const result = getBestResult(scores);
  state.result = { ...result, scores };

  els.resultTitle.textContent = result.title;
  els.resultCode.textContent = result.code;
  els.resultSummary.textContent = result.summary;
  els.resultAvatar.src = result.avatar;
  els.resultAvatar.alt = `${result.title} 角色插画`;
  els.resultBadge.textContent = result.badge;
  els.resultSlogan.textContent = result.slogan;
  els.resultStamp.textContent = result.stamp;
  document.documentElement.style.setProperty("--result-accent", result.accent);
  els.resultDescription.textContent = result.description;
  els.coworkerView.textContent = result.coworkerView;
  els.matchRate.textContent = `匹配度 ${result.match}%`;

  els.resultTags.innerHTML = "";
  result.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.resultTags.appendChild(chip);
  });

  els.scoreList.innerHTML = "";
  dimensions.forEach((dimension) => {
    const value = scores[dimension.key];
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <label>${dimension.label}</label>
      <div class="score-track"><div class="score-bar" style="width:${value}%"></div></div>
      <strong>${value}</strong>
    `;
    els.scoreList.appendChild(row);
  });
}

function allAnswered() {
  return state.answers.every((item) => item !== null);
}

function startQuiz() {
  state.index = 0;
  showScreen("quiz");
  renderQuestion();
}

function resetQuiz() {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  startQuiz();
}

function copyShareText() {
  if (!state.result) {
    return;
  }
  const { title, code, summary, match } = state.result;
  const url = window.location.href;
  const text = `我测出来的 NMTI 牛马人格是「${title} ${code}」, 匹配度 ${match}%。
${summary}
你也来试试：${url}`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      els.shareButton.textContent = "已复制，快去发群";
      window.setTimeout(() => {
        els.shareButton.textContent = "复制分享文案";
      }, 2000);
    })
    .catch(() => {
      window.alert(text);
    });
}

els.startButton.addEventListener("click", startQuiz);
els.jumpResultButton.addEventListener("click", () => {
  state.answers = questions.map((question) => (question.options[0] ? 0 : null));
  renderResult();
  showScreen("result");
});
els.backHomeButton.addEventListener("click", () => showScreen("hero"));
els.prevButton.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});
els.nextButton.addEventListener("click", () => {
  if (state.answers[state.index] === null) {
    window.alert("先选一个，再决定命运。");
    return;
  }

  if (state.index === questions.length - 1) {
    if (!allAnswered()) {
      window.alert("还有题没做完，先别急着看结果。");
      return;
    }
    renderResult();
    showScreen("result");
    return;
  }

  state.index += 1;
  renderQuestion();
});
els.retryButton.addEventListener("click", resetQuiz);
els.retryTopButton.addEventListener("click", resetQuiz);
els.backTopButton.addEventListener("click", () => showScreen("hero"));
els.shareButton.addEventListener("click", copyShareText);

showScreen("hero");
