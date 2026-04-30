const dimensions = [
  { key: "hope", label: { zh: "期待值", en: "Hope" } },
  { key: "drama", label: { zh: "戏剧值", en: "Drama" } },
  { key: "wall", label: { zh: "结界值", en: "Wall" } },
  { key: "cling", label: { zh: "黏人值", en: "Cling" } },
  { key: "logic", label: { zh: "理智值", en: "Logic" } },
];

const ui = {
  zh: {
    htmlTitle: "LMTI 恋爱体质测试 | 你是脱单王者还是孤独终老型选手？",
    metaDescription: "24道题，测出你的恋爱体质。纯娱乐，适合截图发群。",
    ogTitle: "LMTI 恋爱体质测试",
    ogDescription: "你是脱单王者、恋爱剧本、已读不回还是孤独终老型？24道题，3分钟出结果。",
    heroEyebrow: "LMTI / LOVE & MISSING TYPE INDICATOR",
    heroTitle: "LMTI 恋爱体质测试",
    heroCopy:
      "MBTI 先放一边，LMTI 来了。先看看你到底是脱单王者、恋爱剧本、已读不回，还是注定孤独终老型选手。",
    plazaEyebrow: "LMTI PLAZA / LOVE FATE SQUARE",
    plazaTitle: "下拉，看看今天的恋爱广场",
    plazaCopy:
      "这里是假装实时运转的恋爱平行宇宙。有人在撩，有人在等，有人在模板化社交，有人正在练习独处。",
    plazaDropKicker: "你的结果会空降到这里",
    plazaDropTitleIdle: "你的恋爱分身待命中",
    plazaDropNoteIdle: "测完以后，它会被丢进这堆小人里一起营业。",
    plazaDropTitleReady: (title) => `${title} 已混入广场`,
    plazaDropNoteReady: "现在你的分身已经和别的选手一起开始假装社交了。",
    resultPlazaTitle: "你的恋爱分身刚刚被丢进广场",
    resultPlazaCopy: "这一刻开始，你的分身已经加入恋爱平行宇宙，和别的选手一起撩、等、躲、演。",
    resultPlazaDropKicker: "你的结果正在空降",
    resultPlazaDropTitleIdle: "你的恋爱分身正在落位",
    resultPlazaDropNoteIdle: "它现在会直接出现在这页，不用先回首页。",
    resultPlazaDropTitleReady: (title) => `${title} 已落地结果广场`,
    resultPlazaDropNoteReady: "你现在看到的，就是它被扔进恋爱堆里的现场。",
    metrics: {
      questionsLabel: "题量",
      questionsValue: "12 题 / 24 题",
      timeLabel: "耗时",
      timeValue: "约 90 秒 / 3 分钟",
      toneLabel: "风格",
      toneValue: "嘴毒但走心",
    },
    shortMode: "12 题极速版",
    fullMode: "24 题完整版",
    start: "开始测试",
    preview: "我想先看结果风格",
    disclaimer: "仅供娱乐，不适用于择偶、催婚、分手、复合、表白和人生审判。",
    plazaPeek: "下滑进入恋爱广场",
    backHome: "返回首页",
    progress: (current, total) => `第 ${current} / ${total} 题`,
    questionPercent: (percent) => `${percent}%`,
    prev: "上一题",
    next: "下一题",
    submit: "查看结果",
    resultKicker: "你的 LMTI 类型",
    descriptionHeading: "一句话解读",
    coworkerHeading: "前任视角",
    radarHeading: "你的恋爱雷达",
    matchRate: (value) => `匹配度 ${value}%`,
    noteHeading: "友情提示",
    noteText: "结果只是你当下的恋爱切面，不是终身判决。换个发型、多出门两次、少刷手机，结果都可能重算。",
    qrHeading: "正式链接",
    qrText: "扫码或打开 https://fun.tujipath.com/",
    qrFloatText: "扫码直达",
    qrChipText: "官网",
    retryTop: "重新测试",
    backTop: "回首页",
    retry: "再测一次",
    share: "复制分享文案",
    copied: "已复制，快去发群",
    plazaModalKicker: "恋爱广场围观",
    defaultSlogan: "你的恋爱人设已生成，建议截图前先深呼吸。",
    defaultBadge: "脱单/孤独终老鉴定角色",
    defaultStamp: "民政局门外鉴定版",
    previewAvatarAlt: "LMTI 类型角色插画",
    chooseFirst: "先选一个，再决定命运。",
    finishAll: "还有题没做完，先别急着看结果。",
    shareText: ({ title, code, match, summary, url }) =>
      `我测出来的 LMTI 恋爱体质是「${title} ${code}」, 匹配度 ${match}%。\n${summary}\n你也来试试：${url}`,
  },
  en: {
    htmlTitle: "LMTI | Are you dateable or doomed to die alone?",
    metaDescription: "24 questions to reveal your love fate. Petty, playful, and painfully accurate.",
    ogTitle: "LMTI / Love & Missing Type Indicator",
    ogDescription: "Are you the Dateable One, the Drama Queen, the Ghost, or the Solo Elite? 24 questions, 3 minutes.",
    heroEyebrow: "LMTI / LOVE & MISSING TYPE INDICATOR",
    heroTitle: "LMTI Love Fate Test",
    heroCopy:
      "MBTI can wait. LMTI is here. Find out whether you are the Dateable One, the Drama Queen, the Ghost, or the Solo Elite.",
    plazaEyebrow: "LMTI PLAZA / LOVE FATE SQUARE",
    plazaTitle: "Scroll Down Into The Love Fate Plaza",
    plazaCopy:
      "This is a fake live-feed from a parallel dating dimension. Some creatures are flirting, some are waiting, some are ghosting, and some are practicing solitude.",
    plazaDropKicker: "Your result will be dropped here",
    plazaDropTitleIdle: "Your love avatar is standing by",
    plazaDropNoteIdle: "Finish the test and we will throw your dating persona straight into the crowd.",
    plazaDropTitleReady: (title) => `${title} has entered the plaza`,
    plazaDropNoteReady: "Your dating persona is now pretending to socialize with the rest of them.",
    resultPlazaTitle: "Your love avatar just got dumped into the plaza",
    resultPlazaCopy: "Your dating persona has now joined the parallel love dimension, where everyone is flirting, waiting, ghosting, or performing.",
    resultPlazaDropKicker: "Your result is dropping in now",
    resultPlazaDropTitleIdle: "Your love avatar is landing",
    resultPlazaDropNoteIdle: "It now appears right here on the result page. No trip back home needed.",
    resultPlazaDropTitleReady: (title) => `${title} has landed in the result plaza`,
    resultPlazaDropNoteReady: "This is the exact moment your avatar gets thrown into the dating crowd.",
    metrics: {
      questionsLabel: "Length",
      questionsValue: "12 or 24 prompts",
      timeLabel: "Time",
      timeValue: "About 90 sec / 3 min",
      toneLabel: "Tone",
      toneValue: "Savage, but loving",
    },
    shortMode: "12-Question Sprint",
    fullMode: "24-Question Full Test",
    start: "Start Test",
    preview: "Show Me Sample Result",
    disclaimer: "For fun only. Not valid for matchmaking, proposals, breakups, couples therapy, or destiny.",
    plazaPeek: "Scroll Down To Enter The Plaza",
    backHome: "Back Home",
    progress: (current, total) => `Question ${current} / ${total}`,
    questionPercent: (percent) => `${percent}%`,
    prev: "Previous",
    next: "Next",
    submit: "See Result",
    resultKicker: "Your LMTI Type",
    descriptionHeading: "One-Line Read",
    coworkerHeading: "Ex POV",
    radarHeading: "Your Love Radar",
    matchRate: (value) => `${value}% match`,
    noteHeading: "Tiny Disclaimer",
    noteText:
      "This is your current dating persona, not your eternal fate. Change your haircut, leave the house twice, check your phone less, and the result might mutate.",
    qrHeading: "Official Link",
    qrText: "Scan the code or open https://fun.tujipath.com/",
    qrFloatText: "SCAN ME",
    qrChipText: "SITE",
    retryTop: "Retake",
    backTop: "Home",
    retry: "Try Again",
    share: "Copy Share Text",
    copied: "Copied. Go cause chaos.",
    plazaModalKicker: "Plaza Peek",
    defaultSlogan: "Your dating persona has been generated. Share at your own risk.",
    defaultBadge: "Certified Love Creature",
    defaultStamp: "Unofficial Romance Bureau",
    previewAvatarAlt: "LMTI character illustration",
    chooseFirst: "Pick an option before we judge your love life.",
    finishAll: "You still have unanswered prompts. Finish the damage first.",
    shareText: ({ title, code, match, summary, url }) =>
      `My LMTI love type is "${title} ${code}" with a ${match}% match.\n${summary}\nTry it here: ${url}`,
  },
};

const plazaPositions = [
  { left: "5%", top: "11%", lane: "back", delay: "-0.6s", rotate: "-5deg" },
  { left: "22%", top: "6%", lane: "back", delay: "-1.8s", rotate: "4deg" },
  { left: "74%", top: "9%", lane: "back", delay: "-1.2s", rotate: "6deg" },
  { left: "84%", top: "28%", lane: "back", delay: "-2.1s", rotate: "-4deg" },
  { left: "7%", top: "37%", lane: "front", delay: "-0.9s", rotate: "5deg" },
  { left: "21%", top: "50%", lane: "front", delay: "-2.3s", rotate: "-7deg" },
  { left: "76%", top: "48%", lane: "front", delay: "-1.4s", rotate: "4deg" },
  { left: "64%", top: "67%", lane: "front", delay: "-3.1s", rotate: "-6deg" },
  { left: "10%", top: "74%", lane: "back", delay: "-1.6s", rotate: "6deg" },
  { left: "33%", top: "79%", lane: "back", delay: "-2.8s", rotate: "-3deg" },
  { left: "83%", top: "78%", lane: "back", delay: "-0.4s", rotate: "3deg" },
  { left: "52%", top: "18%", lane: "front", delay: "-1.1s", rotate: "-4deg" },
];

const plazaBubblePool = {
  zh: [
    "先对个眼神",
    "你刷到我了吗",
    "今晚脱单了吗",
    "聊着聊着就消失了",
    "已读但不回",
    "群里求介绍",
    "这对象能退货吗",
    "让我再想想",
    "我精神恋爱了",
    "先别表白",
    "这个我来撩",
    "单身但存活中",
  ],
  en: [
    "catching eyes first",
    "did you swipe me?",
    "getting single tonight?",
    "left on read again",
    "seen but surviving",
    "set me up please",
    "can I return this date?",
    "let me think again",
    "spiritually dating",
    "do not confess yet",
    "I got this one",
    "single but thriving",
  ],
};

const questions = [
  {
    tag: { zh: "深夜消息", en: "Late-Night Text" },
    text: {
      zh: "喜欢的人凌晨一点给你发了一条消息，你第一反应是？",
      en: "Your crush texts you at 1 AM. Your first reaction?",
    },
    options: [
      {
        title: { zh: "秒回，装什么睡", en: "Reply instantly, who am I kidding" },
        note: { zh: "对话框都还没关，我根本就没走。", en: "The chat was already open. I never left." },
        scores: { hope: 2, cling: 1, drama: 1 },
      },
      {
        title: { zh: "等一会儿再回", en: "Wait a bit before replying" },
        note: { zh: "不能让他觉得我一直在线。", en: "Cannot look too available." },
        scores: { wall: 1, logic: 2, drama: 1 },
      },
      {
        title: { zh: "已读，明天再说", en: "Seen. Tomorrow." },
        note: { zh: "深夜的消息不值得我今天的情绪。", en: "No late-night message deserves my today energy." },
        scores: { hope: -2, wall: 2, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "初次约会", en: "First Date" },
    text: {
      zh: "第一次约会结束回家，你更可能？",
      en: "After a first date, you are more likely to?",
    },
    options: [
      {
        title: { zh: "复盘每一秒", en: "Replay every second" },
        note: { zh: "他说那句话是不是在暗示？他笑的时候眼睛弯了吗？", en: "Was that a hint? Did their eyes crinkle when they smiled?" },
        scores: { drama: 2, cling: 1, hope: 1 },
      },
      {
        title: { zh: "跟朋友汇报战况", en: "Report to the group chat" },
        note: { zh: "直播式复盘，图文并茂。", en: "Live commentary, screenshots included." },
        scores: { drama: 1, hope: 1, logic: -1 },
      },
      {
        title: { zh: "觉得还行就往下了", en: "Move on if it was fine" },
        note: { zh: "不行的就不回了，行的看下次再说。", en: "If it was fine, cool. If not, next." },
        scores: { wall: 1, logic: 1, hope: -1 },
      },
    ],
  },
  {
    tag: { zh: "社交软件", en: "Dating Apps" },
    text: {
      zh: "你手机里谈恋爱相关的 App 状态更接近？",
      en: "Your dating app status is closer to?",
    },
    options: [
      {
        title: { zh: "随时在线刷", en: "Always swiping" },
        note: { zh: "万一下一个就是对的呢？", en: "What if the next one is the one?" },
        scores: { hope: 2, cling: 1, wall: -1 },
      },
      {
        title: { zh: "装了又卸，卸了又装", en: "Install, delete, repeat" },
        note: { zh: "每次卸载都是一次心灵觉醒，每次安装都是一次现实妥协。", en: "Every deletion is a spiritual awakening. Every reinstall is a reality check." },
        scores: { hope: 1, drama: 1, wall: 1, logic: -1 },
      },
      {
        title: { zh: "没有这些玩意儿", en: "What apps?" },
        note: { zh: "缘分靠线下，或者靠不来。", en: "Fate happens offline. Or not at all." },
        scores: { hope: -2, wall: 2, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "表白时机", en: "Confession Timing" },
    text: {
      zh: "你觉得什么时候该表白？",
      en: "When should you confess your feelings?",
    },
    options: [
      {
        title: { zh: "感觉对了就直说", en: "If it feels right, say it" },
        note: { zh: "弯弯绕绕太累了。", en: "Beating around the bush is exhausting." },
        scores: { hope: 2, drama: -1, wall: -2 },
      },
      {
        title: { zh: "确认对方也有意思再说", en: "Only after confirming mutual interest" },
        note: { zh: "情报先行，不打无准备之仗。", en: "Intelligence first. No unprepared wars." },
        scores: { logic: 2, wall: 1, drama: -1 },
      },
      {
        title: { zh: "等对方先开口", en: "Wait for them to say it first" },
        note: { zh: "我开口了万一空气凝固怎么办。", en: "What if the air turns solid when I speak." },
        scores: { wall: 2, drama: 1, hope: -1 },
      },
    ],
  },
  {
    tag: { zh: "暧昧阶段", en: "Talking Stage" },
    text: {
      zh: "暧昧期最久你能撑多久？",
      en: "How long can you survive the talking stage?",
    },
    options: [
      {
        title: { zh: "撑不住，必须搞清楚", en: "Cannot. Need clarity now." },
        note: { zh: "又甜又吊的才是世界上最折磨人的甜品。", en: "Sweet-and-dangling is the world's most torturous dessert." },
        scores: { hope: 1, cling: 2, drama: 1 },
      },
      {
        title: { zh: "还行，享受模糊感", en: "Fine. I enjoy the ambiguity." },
        note: { zh: "没名分的快乐就不是快乐了？", en: "Is joy without a title not joy?" },
        scores: { drama: 2, hope: 1, logic: -1 },
      },
      {
        title: { zh: "什么暧昧？不存在的", en: "What talking stage? Never happens." },
        note: { zh: "我直接跳过，或者根本没开始过。", en: "I skip it, or it never starts." },
        scores: { hope: -2, wall: 2, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "失恋应对", en: "Breakup Mode" },
    text: {
      zh: "失恋之后你更像哪种状态？",
      en: "After a breakup, which mode do you enter?",
    },
    options: [
      {
        title: { zh: "反复看聊天记录", en: "Re-read the entire chat history" },
        note: { zh: "我要找出到底是哪句话开始不对的。", en: "I need to locate the exact sentence where it all went wrong." },
        scores: { drama: 2, cling: 2, logic: -1 },
      },
      {
        title: { zh: "火速删除一切", en: "Delete everything immediately" },
        note: { zh: "眼不见心不烦，物理清除。", en: "Out of sight, out of mind. Digital exorcism." },
        scores: { wall: 2, hope: -1, drama: -1 },
      },
      {
        title: { zh: "找人分析战局", en: "Commission a forensic analysis from friends" },
        note: { zh: "我不信只有我一个人看不出来问题。", en: "I refuse to believe I was the only one who missed the red flags." },
        scores: { logic: 1, drama: 1, cling: 1 },
      },
    ],
  },
  {
    tag: { zh: "约会频率", en: "Date Frequency" },
    text: {
      zh: "如果恋爱中对方想天天见，你会？",
      en: "If your partner wants to see you every day, you?",
    },
    options: [
      {
        title: { zh: "求之不得", en: "Dream come true" },
        note: { zh: "我本来就是想天天见啊。", en: "I was hoping for exactly this." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "可以，但要留点自己的时间", en: "Sure, but I need my own time too" },
        note: { zh: "恋爱很甜，独处也很重要。", en: "Love is sweet, solitude is essential." },
        scores: { logic: 2, cling: -1, drama: -1 },
      },
      {
        title: { zh: "这个节奏有点吓人", en: "That frequency is terrifying" },
        note: { zh: "天天见？我们不是手机应用。", en: "Every day? We are not a subscription service." },
        scores: { wall: 2, hope: -1, cling: -2 },
      },
    ],
  },
  {
    tag: { zh: "前任出现", en: "The Ex Returns" },
    text: {
      zh: "前任最近突然点赞了你的朋友圈，你？",
      en: "Your ex suddenly likes your post. You?",
    },
    options: [
      {
        title: { zh: "脑补一部剧", en: "Write a whole season in my head" },
        note: { zh: "他是不是想复合？还是手滑？还是故意试探？", en: "Are they back? Was it accidental? Are they testing the waters?" },
        scores: { drama: 2, cling: 1, logic: -2 },
      },
      {
        title: { zh: "无视，继续刷", en: "Ignore, keep scrolling" },
        note: { zh: "一个赞而已，别给自己加戏。", en: "It is a like. Not a plot twist." },
        scores: { wall: 2, logic: 1, drama: -1 },
      },
      {
        title: { zh: "顺手也点一个赞回去", en: "Like something of theirs back" },
        note: { zh: "礼貌性回访，不带任何含义。大概。", en: "A courtesy visit. No subtext. Probably." },
        scores: { drama: 1, hope: 1, wall: -1 },
      },
    ],
  },
  {
    tag: { zh: "吵架之后", en: "After a Fight" },
    text: {
      zh: "和恋人吵完架之后，你更可能？",
      en: "After a fight with your partner, you are more likely to?",
    },
    options: [
      {
        title: { zh: "先道歉，怕冷场", en: "Apologize first, afraid of silence" },
        note: { zh: "谁对谁错以后再说，先别冷战。", en: "Right and wrong can wait. Silence cannot." },
        scores: { cling: 2, hope: 1, wall: -1 },
      },
      {
        title: { zh: "等对方来找你", en: "Wait for them to reach out" },
        note: { zh: "不是我不想和好，是他要先低头。", en: "I want peace, but they need to bow first." },
        scores: { wall: 2, drama: 1, logic: 1 },
      },
      {
        title: { zh: "冷静分析谁的问题", en: "Coldly analyze whose fault it was" },
        note: { zh: "情绪先放一放，理一下时间线。", en: "Emotions on pause. Let us walk through the timeline." },
        scores: { logic: 2, drama: -1, wall: 1 },
      },
    ],
  },
  {
    tag: { zh: "暗恋日常", en: "Crush Mode" },
    text: {
      zh: "暗恋一个人的时候，你更像？",
      en: "When you have a crush, you are more like?",
    },
    options: [
      {
        title: { zh: "全方位情报收集型", en: "Full recon mode" },
        note: { zh: "从朋友圈到音乐品味，我能三个月内掌握此人全部作息。", en: "From their stories to their playlists, I can map their entire rhythm in three months." },
        scores: { drama: 2, cling: 1, logic: -1 },
      },
      {
        title: { zh: "默默关注型", en: "Silent admirer" },
        note: { zh: "看了所有动态，但一个赞都没给过。", en: "Consumed every story. Liked absolutely none." },
        scores: { wall: 2, hope: 1, cling: 1 },
      },
      {
        title: { zh: "装无事发生型", en: "Business as usual" },
        note: { zh: "暗恋？不存在的。我只是在观察一个有趣样本。", en: "Crush? No. I am merely observing an interesting specimen." },
        scores: { wall: 1, logic: 2, hope: -1 },
      },
    ],
  },
  {
    tag: { zh: "分手风格", en: "Breakup Style" },
    text: {
      zh: "如果需要提分手，你更可能？",
      en: "If you need to end it, you are more likely to?",
    },
    options: [
      {
        title: { zh: "当面说清楚", en: "Say it in person, clearly" },
        note: { zh: "该面对的面对，别留尾巴。", en: "Face it. Leave no loose threads." },
        scores: { hope: -1, logic: 2, wall: -1 },
      },
      {
        title: { zh: "写一段很长的消息", en: "Write a very long message" },
        note: { zh: "当面容易说不出口，打字我能把逻辑理清楚。", en: "In person, I choke. On screen, my logic flows." },
        scores: { drama: 1, logic: 1, wall: 1 },
      },
      {
        title: { zh: "慢慢淡出", en: "Slowly fade away" },
        note: { zh: "不是所有结束都需要一个正式的句子。", en: "Not every ending requires a formal sentence." },
        scores: { wall: 2, hope: -1, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "择偶标准", en: "Type Preferences" },
    text: {
      zh: "你觉得择偶最重要的是？",
      en: "What matters most in a partner?",
    },
    options: [
      {
        title: { zh: "感觉对就行", en: "If it feels right, it is right" },
        note: { zh: "列条件的话，我可能把自己列进去了。", en: "If I listed criteria, I might accidentally describe myself." },
        scores: { hope: 2, drama: 1, logic: -2 },
      },
      {
        title: { zh: "至少要三观合", en: "Values must align" },
        note: { zh: "好看的皮囊千篇一律，能聊的灵魂万里挑一。", en: "Good looks are common. Someone who gets you is rare." },
        scores: { logic: 2, hope: 1, drama: -1 },
      },
      {
        title: { zh: "没有标准，看命", en: "No standards. Up to fate." },
        note: { zh: "反正标准都是给不出现的人准备的。", en: "Standards are for people who have options." },
        scores: { hope: -2, wall: 1, logic: -1 },
      },
    ],
  },
  {
    tag: { zh: "朋友评价", en: "Friend Review" },
    text: {
      zh: "朋友怎么评价你的恋爱风格更贴切？",
      en: "Which review fits your dating style better?",
    },
    options: [
      {
        title: { zh: "一恋爱就没影了", en: "Disappears the second they start dating" },
        note: { zh: "我不是消失了，我只是把所有带宽给一个人了。", en: "I did not vanish. I just reallocated all bandwidth." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "永远在分析", en: "Always analyzing" },
        note: { zh: "别人在心动，我在做 SWOT 分析。", en: "While others feel butterflies, I run a SWOT analysis." },
        scores: { logic: 2, hope: -1, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "消息回复", en: "Reply Speed" },
    text: {
      zh: "对方半小时没回消息，你的内心戏更接近？",
      en: "They have not replied in 30 minutes. Your inner monologue is closer to?",
    },
    options: [
      {
        title: { zh: "在忙吧，等着", en: "Probably busy. Waiting calmly." },
        note: { zh: "又不是每个人都像我一样随时在线。", en: "Not everyone lives on their phone like I do." },
        scores: { logic: 1, wall: 1, cling: -1 },
      },
      {
        title: { zh: "构思一整篇文章", en: "Drafting an entire essay" },
        note: { zh: "是我说错话了？还是他看到了更好的对话框？", en: "Did I say something wrong? Or did a better chat appear?" },
        scores: { drama: 2, cling: 1, logic: -2 },
      },
      {
        title: { zh: "无所谓，我也忘了回", en: "Does not matter. I forgot to reply too." },
        note: { zh: "消息自由是双向的。", en: "Message freedom goes both ways." },
        scores: { wall: 2, hope: -1, cling: -1 },
      },
    ],
  },
  {
    tag: { zh: "理想周末", en: "Ideal Weekend" },
    text: {
      zh: "理想周末更接近？",
      en: "Your ideal weekend is closer to?",
    },
    options: [
      {
        title: { zh: "和恋人一起窝着", en: "Cuddling with my person" },
        note: { zh: "只要有人陪，哪里都是景点。", en: "If someone is there, anywhere is a destination." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "约朋友出去社交", en: "Out with friends" },
        note: { zh: "没恋人之前，朋友就是我的精神恋爱。", en: "Before a partner arrives, friends are my emotional romance." },
        scores: { hope: 1, drama: 1, logic: -1 },
      },
      {
        title: { zh: "一个人待着最爽", en: "Solo mode is peak mode" },
        note: { zh: "一个人的下午是奢侈，不是缺憾。", en: "A solo afternoon is a luxury, not a lack." },
        scores: { wall: 2, hope: -1, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "表白被拒", en: "Confession Rejected" },
    text: {
      zh: "如果你表白被拒了，你更像？",
      en: "If your confession is rejected, you are more like?",
    },
    options: [
      {
        title: { zh: "难过一阵，然后继续生活", en: "Sad for a bit, then move on" },
        note: { zh: "被拒不是世界末日，是人生素材。", en: "Rejection is not the end of the world. It is content." },
        scores: { hope: 1, logic: 1, wall: 1 },
      },
      {
        title: { zh: "彻底社死，换一个星球生活", en: "Total social death. Need a new planet." },
        note: { zh: "我可能需要物理搬迁到另一个城市。", en: "I may need to physically relocate to a different city." },
        scores: { drama: 2, wall: 1, hope: -1 },
      },
      {
        title: { zh: "不会表白的所以不存在这个问题", en: "That scenario does not exist for me" },
        note: { zh: "我的人生剧本里没有表白这个章节。", en: "My life script has no confession chapter." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "恋爱节奏", en: "Pacing" },
    text: {
      zh: "你谈恋爱的节奏更像？",
      en: "Your love pacing is closer to?",
    },
    options: [
      {
        title: { zh: "闪电式，三天觉得会结婚", en: "Lightning. Three days in, planning the wedding" },
        note: { zh: "来的时候挡不住，走的时候也别拦我。", en: "When it hits, it hits. When it leaves, do not block the exit." },
        scores: { drama: 2, hope: 1, cling: 1 },
      },
      {
        title: { zh: "温水煮青蛙式", en: "Slow boil" },
        note: { zh: "我不急，但也别让我等太久。", en: "I am not rushing, but do not make me wait forever." },
        scores: { logic: 1, hope: 1, drama: -1 },
      },
      {
        title: { zh: "没有节奏，因为还没开始", en: "No tempo yet. Has not started." },
        note: { zh: "恋爱节奏这个词对我来说还是一个理论概念。", en: "Love pacing is still a theoretical concept for me." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "礼物心思", en: "Gift Energy" },
    text: {
      zh: "给恋人准备礼物时，你更像哪种人？",
      en: "When picking a gift for your partner, which are you?",
    },
    options: [
      {
        title: { zh: "提前一个月就开始想", en: "Planning starts a month early" },
        note: { zh: "我能在礼物上投入的想象力比恋爱本身还多。", en: "I put more imagination into the gift than into the relationship itself." },
        scores: { drama: 1, cling: 2, hope: 1 },
      },
      {
        title: { zh: "当天随便买点什么", en: "Grab something on the day" },
        note: { zh: "心意到了就行，形式不重要。", en: "The thought counts. The format is flexible." },
        scores: { logic: 1, wall: 1, drama: -1 },
      },
      {
        title: { zh: "没有恋人所以也不用送", en: "No partner, no gifts needed" },
        note: { zh: "我就把钱省下来犒劳自己了。", en: "I redirect the budget to myself." },
        scores: { wall: 1, hope: -1, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "社交媒体", en: "Social Media Love" },
    text: {
      zh: "恋爱中你会在朋友圈秀恩爱吗？",
      en: "Would you post couple content on social media?",
    },
    options: [
      {
        title: { zh: "必须有，全世界都该知道", en: "Absolutely. The world deserves to know." },
        note: { zh: "不发的要么是不够爱，要么是鱼太多。", en: "If you do not post, either you do not care or you have too many fish." },
        scores: { drama: 2, cling: 1, hope: 1 },
      },
      {
        title: { zh: "偶尔发一下，克制型", en: "Occasionally. Restrained." },
        note: { zh: "秀恩爱是一种高级的低调。", en: "PDA is an art of subtlety." },
        scores: { logic: 1, drama: 1, wall: 1 },
      },
      {
        title: { zh: "坚决不发", en: "Never posting" },
        note: { zh: "我的恋爱不需要观众。", en: "My love life does not need an audience." },
        scores: { wall: 2, logic: 1, drama: -2 },
      },
    ],
  },
  {
    tag: { zh: "独处能力", en: "Solo Tolerance" },
    text: {
      zh: "连续一个人待三天，你更像？",
      en: "Three days alone. Which you?",
    },
    options: [
      {
        title: { zh: "已经有点想念人了", en: "Already missing human contact" },
        note: { zh: "一个人也还行，但有个人说话就好了。", en: "Alone is fine, but someone to talk to would be nice." },
        scores: { hope: 1, cling: 2, wall: -2 },
      },
      {
        title: { zh: "刚好，充电完成", en: "Perfect. Fully recharged." },
        note: { zh: "三天？再给我三天。", en: "Three days? Give me three more." },
        scores: { wall: 2, logic: 1, hope: -1 },
      },
      {
        title: { zh: "开始在手机上找人聊天", en: "Already seeking chat buddies online" },
        note: { zh: "我不粘人，我只是偶尔需要确认我是活着的。", en: "I am not clingy. I just need to confirm I exist occasionally." },
        scores: { cling: 1, drama: 1, hope: 1 },
      },
    ],
  },
  {
    tag: { zh: "双人活动", en: "Couple Activity" },
    text: {
      zh: "和恋人一起做事情，你更想？",
      en: "Doing things with your partner, you prefer?",
    },
    options: [
      {
        title: { zh: "一起发呆也行", en: "Even staring at the wall together is fine" },
        note: { zh: "重点是有人陪，做什么是次要的。", en: "The point is company. The activity is flexible." },
        scores: { cling: 2, hope: 1, logic: -1 },
      },
      {
        title: { zh: "得有意义才行", en: "It has to be meaningful" },
        note: { zh: "既然在一起，不如做点值得的事。", en: "If we are together, let us make it count." },
        scores: { logic: 2, drama: -1 },
      },
      {
        title: { zh: "我其实更享受一个人做自己的事", en: "I actually prefer doing my own thing alone" },
        note: { zh: "不是不爱社交，是我自己的事情已经够多了。", en: "Not antisocial. Just already busy with myself." },
        scores: { wall: 2, hope: -1, cling: -2 },
      },
    ],
  },
  {
    tag: { zh: "红绿灯", en: "Green Light" },
    text: {
      zh: "约会对象发了暧昧信号，你通常？",
      en: "Your date sends a flirty signal. You usually?",
    },
    options: [
      {
        title: { zh: "接住，并且加速", en: "Catch it and accelerate" },
        note: { zh: "信号来了我直接超车。", en: "Signal received. I am already overtaking." },
        scores: { hope: 2, drama: 1, wall: -2 },
      },
      {
        title: { zh: "先确认一下是不是信号", en: "Verify if it is actually a signal first" },
        note: { zh: "万一是他群发的呢？", en: "What if it was a group broadcast?" },
        scores: { logic: 2, wall: 1, drama: -1 },
      },
      {
        title: { zh: "假装没看见", en: "Pretend I did not see it" },
        note: { zh: "不是不心动，是怕自己误会。", en: "Not uninterested. Just afraid of misreading." },
        scores: { wall: 2, hope: -1, drama: 1 },
      },
    ],
  },
  {
    tag: { zh: "恋爱目标", en: "Love Goals" },
    text: {
      zh: "你觉得恋爱的终极目标是？",
      en: "What is the ultimate goal of dating?",
    },
    options: [
      {
        title: { zh: "找到那个人，然后在一起", en: "Find the one, then be together" },
        note: { zh: "虽然老套，但我确实就是这么想的。", en: "Unoriginal, but honestly what I believe." },
        scores: { hope: 2, cling: 1, drama: 1 },
      },
      {
        title: { zh: "体验过程，不强求结果", en: "Enjoy the process, no forced outcomes" },
        note: { zh: "好的恋爱本身就是目的。", en: "A good relationship is its own purpose." },
        scores: { logic: 1, hope: 1, wall: 1 },
      },
      {
        title: { zh: "这个问题我看不懂", en: "I do not understand the question" },
        note: { zh: "我的恋爱目标还没有开始设置。", en: "My love settings have not been initialized yet." },
        scores: { wall: 2, hope: -2, logic: -1 },
      },
    ],
  },
  {
    tag: { zh: "情感消耗", en: "Emotional Budget" },
    text: {
      zh: "一段感情结束后，你需要多久恢复？",
      en: "After a relationship ends, how long to recover?",
    },
    options: [
      {
        title: { zh: "很久，情绪战线长", en: "A long time. Extended emotional front." },
        note: { zh: "我不是没走出来，我只是在慢慢收拾残局。", en: "I am not stuck. I am slowly clearing debris." },
        scores: { drama: 2, cling: 1, wall: -1 },
      },
      {
        title: { zh: "转换速度快，下一个更好", en: "Quick pivot. Next will be better." },
        note: { zh: "结束就是开始，我不会在原地等雨停。", en: "An end is a start. I do not wait for rain to stop." },
        scores: { hope: 2, logic: 1, drama: -1 },
      },
      {
        title: { zh: "恢复什么？我本来就没开始", en: "Recover from what? I never started." },
        note: { zh: "这题就好像问我健身房卡到期了心疼不心疼——我根本没去过。", en: "This question is like asking if I miss my gym membership. I never went." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
];

const questionSets = {
  short: [0, 1, 2, 4, 7, 9, 12, 15, 17, 19, 21, 23],
  full: questions.map((_, index) => index),
};

const archetypes = [
  {
    code: "SOLO",
    avatar: "./avatars/ghost.svg",
    accent: "#536471",
    title: { zh: "精神单身贵族", en: "Solo Elite" },
    badge: { zh: "民政局绕道型选手", en: "Marriage bureau detour champion" },
    slogan: { zh: "你不是找不到，你是体检报告写健康所以没入院。", en: "You are not loveless. Your health report is clean, so you never got admitted." },
    stamp: { zh: "独处系高发类型", en: "Solo-mode specimen" },
    summary: { zh: "你的独处不是寂寞，是别墅。别人想进来得先面试。", en: "Your solitude is not loneliness. It is a mansion. Visitors need an interview first." },
    description: { zh: "你一个人的时候比两个人还忙：追剧、健身、做饭、发呆，日程排得比老板还满。你不是怕恋爱，你是怕有人来打乱你精心搭建的独立生活系统，而且那个系统跑得比大多数关系都稳。", en: "You are busier alone than most people are together: shows, gym, cooking, zoning out. You do not fear love. You fear someone logging into your perfectly running solo operating system and installing bloatware." },
    coworkerView: { zh: "朋友们都替你急，但看你朋友圈晒的独居生活，觉得急的好像应该是自己。", en: "Friends worry about you, but seeing your solo-lifestyle posts, they start worrying about themselves instead." },
    tags: { zh: ["独处天花板", "不是找不到是不要", "住在自己的别墅里"], en: ["Solo penthouse", "Not can not, will not", "Living in own mansion"] },
    profile: { hope: 18, drama: 20, wall: 95, cling: 14, logic: 78 },
  },
  {
    code: "WAIT",
    avatar: "./avatars/hold.svg",
    accent: "#B49B5F",
    title: { zh: "等爱天降型", en: "Waiting for the One" },
    badge: { zh: "朋友圈万年伴娘/伴郎型", en: "Permanent bridesmaid/groomsman" },
    slogan: { zh: "你的恋爱进度条永远停在 99%，最后 1% 叫'等对方先开口'。", en: "Your love progress bar is forever stuck at 99%. The last percent is called 'waiting for them to speak first'." },
    stamp: { zh: "等待系高发类型", en: "Waiting specimen" },
    summary: { zh: "你有一颗恋爱的心和一双不动的手，俗称心动选手零行动。", en: "You have a heart ready for love and hands that refuse to move. AKA heart-racer, zero-action." },
    description: { zh: "你嘴上说顺其自然，其实内心已经排练了八百遍偶遇剧本。你喜欢一个人最多做到'不小心出现在他常去的咖啡馆'，然后坐角落假装看手机。你是那种朋友圈给别人点赞点到手酸、但永远不会主动发一条消息的行动力低配版恋爱选手。", en: "You say let fate decide, but you have rehearsed 800 chance-encounter scripts in your head. Your boldest move is accidentally showing up at their regular cafe and then sitting in the corner pretending to scroll. You are the low-action version of a romantic, whose thumbs are sore from liking posts but will never send a message." },
    coworkerView: { zh: "你分析别人感情的时候头头是道，轮到自己就像一个写了全册攻略但从不出门的旅游博主。", en: "You analyze other people's love lives like a PhD, but when it is your turn, you are a travel blogger who writes guidebooks but never leaves the house." },
    tags: { zh: ["嘴上随缘心里导演", "心动零行动", "攻略写满从不出发"], en: ["Says fate, directing internally", "Heart racing, body frozen", "Guidebook full, never traveling"] },
    profile: { hope: 72, drama: 58, wall: 48, cling: 52, logic: 34 },
  },
  {
    code: "RUSH",
    avatar: "./avatars/hero.svg",
    accent: "#F08B2D",
    title: { zh: "闪恋特攻队", en: "Lightning Dater" },
    badge: { zh: "三天就觉得是命定之人的选手", en: "Marriage-tier by day three" },
    slogan: { zh: "你的恋爱速度比你手机换壳还快，退货率也差不多。", en: "You change partners faster than phone cases. Return rate is about the same." },
    stamp: { zh: "速攻系高发类型", en: "Speed-dating specimen" },
    summary: { zh: "你的恋爱节奏是：看到、心动、在一起。后悔是明天的事。", en: "Your love rhythm: spot, fall, together. Regret is tomorrow's problem." },
    description: { zh: "第一天心动，第三天觉得是命定之人，第七天开始规划周末，第十四天突然觉得好像哪里不对。你不是花心，你只是心动阈值太低、行动力太强、刹车系统基本失灵。你每一轮都真的很认真，认真的频率比大多数人换洗发水都高。", en: "Day one you are smitten, day three it is destiny, day seven you are planning weekends, day fourteen something feels off. You are not fickle. Your heart threshold is just too low, your action reflex too strong, and your braking system basically nonexistent. Every round you are dead serious. Just serious more often than most people change shampoo." },
    coworkerView: { zh: "你的朋友已经放弃追踪你的感情状态了，每次问'还是那个吗'答案都不一样。", en: "Your friends gave up tracking your relationship status. Every time they ask 'still the same one?' the answer is different." },
    tags: { zh: ["三秒心动", "刹车失灵", "认真的频率比换洗发水高"], en: ["Love at first scroll", "No brakes detected", "Serious more often than shampoo changes"] },
    profile: { hope: 88, drama: 72, wall: 16, cling: 68, logic: 28 },
  },
  {
    code: "GHOST",
    avatar: "./avatars/boss.svg",
    accent: "#1F7A6B",
    title: { zh: "已读不回型选手", en: "The Ghost" },
    badge: { zh: "社交低电量永续模式", en: "Permanently on social power-saving mode" },
    slogan: { zh: "你的对话框像一只fic死的手机，偶尔亮一下然后又暗回去。", en: "Your chat looks like a phone in battery-save mode. It flashes once, then goes dark again." },
    stamp: { zh: "隐形系高发类型", en: "Ghosting specimen" },
    summary: { zh: "你回消息的速度约等于你手机2%电量时的运行速度。", en: "Your reply speed is roughly equivalent to a phone running on 2% battery." },
    description: { zh: "你不是冷血动物，你是社交节能动物。你心里可能已经打了八百字回复草稿，但你的手指永远停在输入框外面。你喜欢一个人也能做到三天不回消息然后突然蹦出一句'刚才在想你说的事'——你真的在想，只是身体跟不上大脑，大脑跟不上情感。", en: "You are not cold-blooded. You are a social energy conservationist. You may have drafted 800 words of reply in your head, but your fingers hover outside the input box. You can like someone and still not reply for three days, then suddenly pop up with 'I was thinking about what you said.' You genuinely were. Your body just cannot keep up with your brain, and your brain cannot keep up with your feelings." },
    coworkerView: { zh: "你朋友圈点赞从不超过3秒，但回复消息的延迟连运营商都替你着急。", en: "You like posts within 3 seconds, but your reply delay makes even your carrier anxious." },
    tags: { zh: ["输入中…然后没了", "社交省电模式", "真的在想只是手没动"], en: ["Typing... then gone", "Social low-power", "Actually thinking, fingers just frozen"] },
    profile: { hope: 36, drama: 44, wall: 82, cling: 22, logic: 56 },
  },
  {
    code: "DRAMA",
    avatar: "./avatars/show.svg",
    accent: "#FF6F61",
    title: { zh: "恋爱剧本型", en: "Drama Director" },
    badge: { zh: "每段感情都是限定剧还有第二季", en: "Every relationship is a limited series with a surprise season two" },
    slogan: { zh: "你不在恋爱，你在拍摄一部只有你参演的网剧，其他人是群演。", en: "You are not dating. You are producing a web series where you are the lead and everyone else is an extra." },
    stamp: { zh: "戏剧系高发类型", en: "Drama specimen" },
    summary: { zh: "别人谈恋爱，你演恋爱。起承转合、反转、烂尾——编剧导演你都兼了。", en: "Others date. You perform dating. Setup, twist, bad ending — you are writer, director, and cast." },
    description: { zh: "你的恋爱永远不缺剧情：有误会、有深夜长谈、有朋友圈暗戳戳的控诉、有凌晨三点的重新开始。你不是故意搞事，你只是天生自带戏剧张力，和你谈恋爱就像订阅了一部没法退出的人生番剧，烂尾也是番外的那种。", en: "Your love life never lacks plot: misunderstandings, midnight talks, cryptic social media posts, 3 AM restarts. You do not create drama on purpose. You just come with built-in dramatic tension. Dating you is like subscribing to a series you cannot cancel, where even the bad ending gets a bonus episode." },
    coworkerView: { zh: "你的朋友不用追剧，看你朋友圈就够了，更新频率比周更番还高。", en: "Your friends do not need Netflix. Your social feed updates more often than weekly anime." },
    tags: { zh: ["自带编剧", "剧情反转比Netflix多", "烂尾也有番外"], en: ["Built-in screenwriter", "More twists than Netflix", "Even bad endings get specials"] },
    profile: { hope: 70, drama: 96, wall: 24, cling: 62, logic: 18 },
  },
  {
    code: "PLAN",
    avatar: "./avatars/brain.svg",
    accent: "#5B6EE1",
    title: { zh: "恋爱规划师", en: "Love Strategist" },
    badge: { zh: "择偶条件比JD还长", en: "Dating criteria longer than a job posting" },
    slogan: { zh: "别人心动的时候你在做可行性分析，别人表白的时候你在排期。", en: "When others feel butterflies, you run feasibility. When others confess, you schedule." },
    stamp: { zh: "策略系高发类型", en: "Strategy specimen" },
    summary: { zh: "你相信好的恋爱是可以规划出来的，只是你规划得太久，导致心动的人已经走完了整个感情周期。", en: "You believe good love can be planned. You just plan so long that your crush completes an entire relationship cycle before you act." },
    description: { zh: "你的择偶清单比年终KPI还严谨：身高、学历、兴趣爱好、家庭观、宠物态度、冰箱整理方式——你恨不得做一个共享表格让候选人自己填。你分析别人的恋爱头头是道，分析出自己的结论永远是'条件还不成熟，再等等'。等等等等到对象已经被别人领走了。", en: "Your dating checklist is stricter than your annual KPI: height, education, hobbies, family values, pet stance, fridge organization method. You wish you could send candidates a shared spreadsheet to fill out. You analyze other people's relationships brilliantly. Your own conclusion is always 'conditions not yet met, let us wait.' You wait until your crush is already taken by someone with a shorter checklist." },
    coworkerView: { zh: "你分析别人的感情比分析师还准，但自己的感情像是一个永远只有PPT没有落地的项目。", en: "You read others' love lives like a senior analyst. Your own love life is a project that forever stays in slide-deck purgatory." },
    tags: { zh: ["择偶清单比KPI长", "PPT式恋爱", "永远在评估从未在恋爱"], en: ["Checklist beats KPI", "Slide-deck love", "Always assessing, never dating"] },
    profile: { hope: 50, drama: 20, wall: 54, cling: 28, logic: 94 },
  },
  {
    code: "CLINGY",
    avatar: "./avatars/tank.svg",
    accent: "#596A80",
    title: { zh: "黏性星球型", en: "Gravity Well" },
    badge: { zh: "恋爱吸铁石但磁性有点太强", en: "Relationship magnet with dangerously strong pull" },
    slogan: { zh: "你恋爱前的独立人设和恋爱后的黏人程度，像是两款完全不同的App。", en: "Your pre-relationship independence and post-relationship clinginess are like two completely different apps." },
    stamp: { zh: "黏人系高发类型", en: "Clinging specimen" },
    summary: { zh: "你不是控制狂，你只是想让对方的手机永远对你保持在线状态。", en: "You are not controlling. You just want their phone to always show you as online." },
    description: { zh: "恋爱前你是独立酷拽人设，恋爱后你是全天候追踪系统。你不想控制谁，你只是想知道对方在哪里、和谁在一起、在做什么、为什么消息已读两分钟了还没回。你不是不信任，你是太在乎，在乎到一个正常人会被煳住的程度。你的好是真的好，你的煳也是真的煳。", en: "Before dating you are cool and independent. After dating you are a 24/7 tracking system. You do not want to control anyone. You just want to know where they are, who they are with, what they are doing, and why their read receipt is two minutes old without a reply. You are not distrusting. You are over-invested, to the point where a normal person feels like they are being hugged by a starfish. Your affection is real. Your grip is also real." },
    coworkerView: { zh: "你的恋人要么觉得被全世界愛着，要么觉得自己被全天候GPS定位。有时是同时。", en: "Your partner either feels loved by the whole world, or GPS-tracked by it. Sometimes both at the same time." },
    tags: { zh: ["24小时在线追踪", "恋爱前vs恋爱后判若两人", "海星式拥抱"], en: ["24/7 tracking system", "Before love vs after love: two apps", "Starfish hug"] },
    profile: { hope: 74, drama: 56, wall: 14, cling: 92, logic: 22 },
  },
  {
    code: "FLIRT",
    avatar: "./avatars/spark.svg",
    accent: "#73B44A",
    title: { zh: "撩就完了型", en: "Charm Launcher" },
    badge: { zh: "天生自带好感度加成", en: "Born with a likeability buff" },
    slogan: { zh: "你的恋爱进度条永远停在'正在匹配'，因为匹配成功之后你就不知道干嘛了。", en: "Your love progress bar is stuck on 'matching.' Because after matching, you have no idea what to do." },
    stamp: { zh: "气场系高发类型", en: "Charisma specimen" },
    summary: { zh: "你不需要学怎么撩人，你需要学撩完以后怎么不变成已读不回。", en: "You do not need to learn how to flirt. You need to learn how to not ghost after flirting." },
    description: { zh: "你是那种走进任何场合都能和人聊到起飞的人，眼神、语气、距离感拿捏得像教科书。问题是你也太会了，会到对方已经觉得你们在一起了，你还觉得你们在社交。你的心动范围是一条宽阔的高速公路，但你的恋爱转向灯从来没打过。", en: "You walk into any room and click with people instantly. Eye contact, tone, distance management — textbook level. The problem is you are too good, so good that they think you are already together while you think you are just being social. The range of your heartbeat is a wide highway. Your relationship turn signal has never been used." },
    coworkerView: { zh: "你的人缘好到让人分不清到底谁才是你认真的那个，包括你自己。", en: "Your social circle is so wide that nobody can tell who you are actually into, including yourself." },
    tags: { zh: ["撩完就下线", "转向灯从未打过", "心动是高速公路恋爱是没有出口"], en: ["Flirt and disconnect", "Turn signal never used", "Love highway with no exit"] },
    profile: { hope: 60, drama: 66, wall: 20, cling: 34, logic: 30 },
  },
];

const archetypeVariants = {
SOLO: [
    {
      key: "zen",
      codeSuffix: "A",
      match: (scores) => scores.wall >= 88 && scores.hope <= 28,
      title: { zh: "禅意单身贵族", en: "Zen Solo Elite" },
      badge: { zh: "简历上写单身是优势", en: "Single is a resume highlight" },
      slogan: { zh: "你不是拒绝恋爱，你是见过太多烂片之后决定只院线不看盗版。", en: "You are not rejecting love. You just decided to skip the bootlegs after too many bad movies." },
      stamp: { zh: "禅意分支", en: "Zen branch" },
      summary: { zh: "你已经不需要任何人来让生活完整了——你的生活比大多数情侣的周末还丰富。", en: "You no longer need anyone to complete your life. Your weekends are richer than most couples'." },
      tags: { zh: ["独处天花板", "内心自洽到离谱", "民政局绕道"], en: ["Solo penthouse", "Self-contained to absurd", "Marriage bureau detour"] },
    },
    {
      key: "pretend",
      codeSuffix: "B",
      match: (scores) => scores.drama >= 50,
      title: { zh: "嘴硬单身贵族", en: "Pretending Solo Elite" },
      badge: { zh: "独处是演的，追剧是真的", en: "Solo is an act. Binge-watching is real" },
      slogan: { zh: "你嘴上说我很好，深夜的搜索记录写的全是'怎么判断他喜不喜欢我'。", en: "You say you are fine. Your search history says 'how to tell if he likes me' six times." },
      stamp: { zh: "嘴硬分支", en: "Denial branch" },
      summary: { zh: "你嘴上说不将就，深夜播放列表出卖了你：歌单全是伤感情歌。", en: "You say you will not settle. Your late-night playlist is all breakup ballads." },
      tags: { zh: ["嘴硬心软", "独处是假的", "深夜追剧外放选手"], en: ["Tough talk", "Solo is fake", "Midnight drama with speakers on"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "标准单身贵族", en: "Standard Solo Elite" },
      badge: { zh: "不是找不到是不要", en: "Not can't, won't" },
      slogan: { zh: "你的独处质量太高了，高到另一个人进来可能算降级。", en: "Your solo quality is so high that adding someone might be a downgrade." },
      stamp: { zh: "标准独处分支", en: "Core solo branch" },
      summary: { zh: "你的独处不是寂寞，是住别墅。别人想参观得先预约。", en: "Your solitude is not loneliness. It is a mansion. Visitors need an appointment." },
      tags: { zh: ["独处豪宅", "不缺爱但缺有意思的人", "只能约饭不能约命"], en: ["Solo mansion", "Not lacking love, lacking interesting people", "Can do lunch, not destiny"] },
    },
  ],
  WAIT: [
    {
      key: "poet",
      codeSuffix: "A",
      match: (scores) => scores.drama >= 66,
      title: { zh: "诗性等待型", en: "Poetic Waiter" },
      badge: { zh: "内心正在拍文艺片", en: "Currently directing an indie romance in head" },
      slogan: { zh: "你不是在等一个人，你是在脑内自编自导一部还没找到主演的文艺片。", en: "You are not waiting for a person. You are directing an indie romance in your head and still casting the lead." },
      stamp: { zh: "诗性分支", en: "Poet branch" },
      summary: { zh: "你的等待本身已经是作品了，虽然到现在还只有你一个人出演。", en: "Your waiting is already a masterpiece, though so far you are the only cast member." },
      tags: { zh: ["等待也是创作", "脑内导演", "缺一个主演招聘中"], en: ["Waiting as art", "Inner director", "Lead actor wanted"] },
    },
    {
      key: "reformed",
      codeSuffix: "B",
      match: (scores) => scores.hope >= 70 && scores.logic >= 40,
      title: { zh: "理性等待型", en: "Strategic Waiter" },
      badge: { zh: "等是策略不是佛系", en: "Waiting is strategy, not zen" },
      slogan: { zh: "你等一个人不是因为被动，是因为在等那个概率最高的窗口期。", en: "You are not waiting passively. You are waiting for the statistically optimal window." },
      stamp: { zh: "理性分支", en: "Strategic branch" },
      summary: { zh: "你的等待是数据驱动的，你的数据目前显示市场仍未出现符合要求的标的。", en: "Your waiting is data-driven. Current data shows no qualifying listings on the market." },
      tags: { zh: ["概率型等爱", "不是佛系是策略", "择偶JD持续更新中"], en: ["Probability-based waiting", "Not zen, strategic", "Dating JD continuously updated"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "佛系等待型", en: "Standard Waiter" },
      badge: { zh: "缘分到了会到", en: "When fate arrives, it arrives" },
      slogan: { zh: "你有一颗恋爱的心和一双并不打算动的手。心动选手，零行动。", en: "You have a loving heart and hands that refuse to move. Heart-racer, zero-action." },
      stamp: { zh: "标准等待分支", en: "Core waiting branch" },
      summary: { zh: "你嘴上说'随缘'，其实内心排练了八百遍偶遇剧本，只是在等对方先走那一步。", en: "You say 'let fate decide,' but you have rehearsed 800 encounter scripts in your head, just waiting for them to make the first move." },
      tags: { zh: ["心动零行动", "嘴上随缘心里导演", "攻略写满从不出发"], en: ["Heart racing, body frozen", "Says fate, directing internally", "Guidebook full, never departing"] },
    },
  ],
  WAIT: [
    {
      key: "poet",
      codeSuffix: "A",
      match: (scores) => scores.drama >= 66,
      title: { zh: "诗性等待型", en: "Poetic Waiter" },
      badge: { zh: "内心正在上演文艺片", en: "Currently screening an indie film inside" },
      slogan: { zh: "你不是在等一个人，你是在等一个值得写进自传的剧情。", en: "You are not waiting for a person. You are waiting for a plot twist worth a memoir." },
      stamp: { zh: "诗性分支", en: "Poet branch" },
      summary: { zh: "你的等待本身就已经是一部作品了，虽然还没有第二主角。", en: "Your waiting is already a masterpiece, even without the co-lead." },
      tags: { zh: ["等待是创作", "内心文艺片", "缺一个主演"], en: ["Waiting as art", "Indie film inside", "Missing a co-lead"] },
    },
    {
      key: "reformed",
      codeSuffix: "B",
      match: (scores) => scores.hope >= 70 && scores.logic >= 40,
      title: { zh: "理性等待型", en: "Strategic Waiter" },
      badge: { zh: "等是策略不是被动", en: "Waiting is strategy, not passivity" },
      slogan: { zh: "你不是不愿行动，你是在等概率最高的那个时机。", en: "You are not passive. You are waiting for the highest-probability window." },
      stamp: { zh: "理性分支", en: "Strategic branch" },
      summary: { zh: "你的等待不是佛系，是数据驱动的择偶策略。", en: "Your waiting is not Zen. It is data-driven dating strategy." },
      tags: { zh: ["概率型等待", "不是被动", "数据驱动"], en: ["Probability-based waiting", "Not passive", "Data-driven"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "佛系等待型", en: "Standard Waiter" },
      badge: { zh: "缘分到了自然会到", en: "When fate arrives, it arrives" },
      slogan: { zh: "你相信对的人会出现，只是不知道几点。", en: "You believe the right person will show up. You just do not know the ETA." },
      stamp: { zh: "标准等待分支", en: "Core waiting branch" },
      summary: { zh: "你有一颗恋爱的心和一双并不打算动的手。心动选手，零行动。", en: "You have a loving heart and hands that refuse to move. Heart-racer, zero-action." },
      tags: { zh: ["顺其自然", "等风来", "心动但手不动"], en: ["Let it happen", "Waiting for wind", "Heart moves, hands stay"] },
    },
  ],
  RUSH: [
    {
      key: "repeat",
      codeSuffix: "A",
      match: (scores) => scores.drama >= 74,
      title: { zh: "循环闪恋特攻队", en: "Serial Lightning Dater" },
      badge: { zh: "季度更新型选手", en: "Quarterly update dater" },
      slogan: { zh: "你不是花心，你只是每季度都需要重启一次恋爱系统。", en: "You are not fickle. You just need to reboot your love system every quarter." },
      stamp: { zh: "循环速攻分支", en: "Serial rush branch" },
      summary: { zh: "你的恋爱密度比大多数人的追剧频率还高，而且每部都追到了大结局。", en: "Your relationship density exceeds most people's binge frequency, and you finish every season." },
      tags: { zh: ["季度重启", "认真的频率很高", "停不下来就别停"], en: ["Quarterly reboot", "Dead serious every time", "Cannot stop, will not stop"] },
    },
    {
      key: "hopeful",
      codeSuffix: "B",
      match: (scores) => scores.hope >= 86,
      title: { zh: "恋战特攻队", en: "Hopeful Lightning Dater" },
      badge: { zh: "每一段都是真心但每段都像季度末冲刺", en: "Every round is real, every round feels like end-of-quarter sprint" },
      slogan: { zh: "你不是花心，你只是每次心动都会把油门踩到底。刹车是下一辆车的事。", en: "You are not fickle. You just floor it every time your heart moves. Brakes are the next car's problem." },
      stamp: { zh: "恋战分支", en: "Hopeful rush branch" },
      summary: { zh: "你每次都真的很认真，认真的频率比大多数人换手机壳还高。", en: "Every time you are dead serious. Just serious more often than most people change phone cases." },
      tags: { zh: ["每次都认真", "油门到底", "刹车是下一辆的事"], en: ["Genuine every time", "Pedal to the floor", "Brakes are next car's problem"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "闪恋突击队", en: "Standard Lightning Dater" },
      badge: { zh: "默认速通型恋爱选手", en: "Default speed-run dater" },
      slogan: { zh: "你喜欢一个人比喜欢一首歌还快，不喜欢也比切歌快。", en: "You fall faster than a song download, and skip faster than changing tracks." },
      stamp: { zh: "标准速攻分支", en: "Core rush branch" },
      summary: { zh: "你的心动按钮是个触发器，不是切换键。按下去了就是全速前进。", en: "Your heart button is a trigger, not a toggle. Once pressed, it is full speed ahead." },
      tags: { zh: ["一键心动", "快速进退", "后悔也是明天的事"], en: ["One-click crush", "Fast in and out", "Regret is tomorrow's problem"] },
    },
  ],
  GHOST: [
    {
      key: "overthink",
      codeSuffix: "A",
      match: (scores) => scores.wall >= 80 && scores.drama >= 42,
      title: { zh: "内耗型已读不回", en: "Overthinking Ghost" },
      badge: { zh: "回复一条消息需要三天心理建设", en: "Requiring 3 days of mental prep per reply" },
      slogan: { zh: "你已经在脑子里回了十次了，只是手指头一个字也没动。", en: "You already replied ten times in your head. Your fingers typed exactly zero words." },
      stamp: { zh: "内耗分支", en: "Overthink branch" },
      summary: { zh: "你不是冷漠，你是在打字框和删除键之间做循环运动。", en: "You are not cold. You are doing cross-fit between the text box and the delete key." },
      tags: { zh: ["输入中…然后没了", "内心回复了十遍", "手指头一个字没动"], en: ["Typing... then gone", "Replied 10 times in head", "Fingers typed zero words"] },
    },
    {
      key: "selective",
      codeSuffix: "B",
      match: (scores) => scores.logic >= 60,
      title: { zh: "选择性已读不回", en: "Selective Ghost" },
      badge: { zh: "只回值得回的消息像在筛选简历", en: "Replying to messages like screening resumes" },
      slogan: { zh: "你回消息的优先级排得比公司OKR还严，大部分消息连初轮都没过。", en: "Your reply priority is stricter than company OKRs. Most messages do not survive round one." },
      stamp: { zh: "选择性分支", en: "Selective branch" },
      summary: { zh: "你不是懒，你是社交能量分配器的阈值设得太高了。", en: "You are not lazy. Your social energy allocator just has a very high threshold." },
      tags: { zh: ["简历筛选式社交", "能量预算制", "按优先级回复"], en: ["Resume-screening social", "Energy budget system", "Priority-based replies"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "标准已读不回", en: "Standard Ghost" },
      badge: { zh: "默认低电量社交模式", en: "Default social power-saving mode" },
      slogan: { zh: "你的对话框像一只2%电量的手机，偶尔亮一下提醒你还没关机。", en: "Your chat looks like a phone on 2% battery. It flashes occasionally to remind you it is not dead yet." },
      stamp: { zh: "标准隐形分支", en: "Core ghost branch" },
      summary: { zh: "你回消息的速度约等于你手机2%电量时的运行速度——偶尔亮，大部分时间黑屏。", en: "Your reply speed is roughly equivalent to a phone on 2% — occasionally lit, mostly black screen." },
      tags: { zh: ["社交省电模式", "2%电量运行中", "不是不爱只是不在线"], en: ["Social power-saving", "Running on 2% battery", "Not unavailable, just offline"] },
    },
  ],
  DRAMA: [
    {
      key: "scripted",
      codeSuffix: "A",
      match: (scores) => scores.drama >= 88,
      title: { zh: "编剧型恋爱剧本", en: "Scripted Drama Director" },
      badge: { zh: "自带三幕结构和烂尾续订", en: "Built-in three-act structure with a surprise renewal" },
      slogan: { zh: "你不是在恋爱，你在自导自演一口气拍了三季的限定番。", en: "You are not dating. You are directing a three-season limited series by yourself." },
      stamp: { zh: "编剧分支", en: "Scripted branch" },
      summary: { zh: "你的每段感情都有开头、高潮、反转、烂尾、然后续订。和Netflix唯一的区别是Netflix知道什么时候烂尾。", en: "Every relationship has a setup, climax, twist, bad ending, and then a renewal. The only difference from Netflix is Netflix knows when to stop." },
      tags: { zh: ["自带编剧和续订", "剧情比Netflix多", "烂尾也有番外"], en: ["Writer and renewer built-in", "More twists than Netflix", "Bad endings get bonus episodes"] },
    },
    {
      key: "live",
      codeSuffix: "B",
      match: (scores) => scores.cling >= 56,
      title: { zh: "直播型恋爱剧本", en: "Live-Action Drama Director" },
      badge: { zh: "朋友圈就是你的恋爱直播间", en: "Your social feed is a relationship livestream" },
      slogan: { zh: "你的恋爱如果不上朋友圈就等于没发生，弹幕区比正片还精彩。", en: "If your relationship is not on social media, it did not happen. The comment section is better than the show." },
      stamp: { zh: "直播分支", en: "Live branch" },
      summary: { zh: "你恋爱的每一个阶段都需要观众认证，像一场没有剪辑的真人秀。", en: "Every stage of your relationship needs audience validation, like an uncut reality show." },
      tags: { zh: ["全员围观式恋爱", "朋友圈实时更新", "没有观众等于没谈"], en: ["Audience-required love", "Real-time feed updates", "No viewers = did not happen"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "经典恋爱剧本", en: "Standard Drama Director" },
      badge: { zh: "默认剧情丰富型恋爱选手", en: "Default rich-plot dater" },
      slogan: { zh: "你的恋爱永远比预期多一个反转，编剧都写不出来这种。", en: "Your love life always has one more twist than expected. Even screenwriters cannot write this." },
      stamp: { zh: "标准剧本分支", en: "Core drama branch" },
      summary: { zh: "和你谈恋爱像追番：永远有转折，偶尔有烂尾，但绝对不会无聊。", en: "Dating you is like following a series: constant twists, occasional bad endings, but never boring." },
      tags: { zh: ["自带剧情转折", "不会无聊也不太平静", "追番式恋爱"], en: ["Built-in plot twists", "Never boring, rarely calm", "Series-style love"] },
    },
  ],
  PLAN: [
    {
      key: "checklist",
      codeSuffix: "A",
      match: (scores) => scores.logic >= 88,
      title: { zh: "清单型恋爱规划师", en: "Checklist Strategist" },
      badge: { zh: "择偶标准比岗位JD还长还带版本号", en: "Dating criteria longer than a JD, with version numbers" },
      slogan: { zh: "你的择偶清单比年终KPI还严谨，而且每年都在更新但从未有人通过。", en: "Your dating checklist is stricter than annual KPIs, and it updates yearly but nobody has ever passed." },
      stamp: { zh: "清单分支", en: "Checklist branch" },
      summary: { zh: "你在心动之前先做了背调、SWOT分析和场景压力测试，然后发现没有人通过。", en: "Before falling for anyone, you did background checks, SWOT analysis, and stress testing. Nobody passed." },
      tags: { zh: ["择偶清单比KPI长", "v2.0版仍在招人", "从未有人通过面试"], en: ["Checklist longer than KPI", "Version 2.0 still hiring", "No candidate has ever passed"] },
    },
    {
      key: "revised",
      codeSuffix: "B",
      match: (scores) => scores.hope >= 48,
      title: { zh: "迭代型恋爱规划师", en: "Revising Strategist" },
      badge: { zh: "择偶标准永远在v0.x", en: "Dating criteria forever at v0.x" },
      slogan: { zh: "你的择偶标准永远在更新，但版本号从没到过1.0。", en: "Your dating criteria are always updating, but the version number has never reached 1.0." },
      stamp: { zh: "迭代分支", en: "Revising branch" },
      summary: { zh: "你每段失败的感情都在帮你优先级排序，问题是排序完就到了下一段排序。", en: "Every failed relationship helps you re-prioritize. The problem is re-prioritizing leads to the next round of re-prioritizing." },
      tags: { zh: ["永远v0.x版本", "迭代式择偶", "需求文档式恋爱"], en: ["Forever v0.x", "Iterative dating", "Requirements-doc love"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "标准恋爱规划师", en: "Standard Love Strategist" },
      badge: { zh: "默认理性择偶模式", en: "Default rational selection mode" },
      slogan: { zh: "别人心动的时候你在做可行性分析，别人结婚的时候你还在排期。", en: "When others feel butterflies, you run feasibility. When others marry, you are still scheduling." },
      stamp: { zh: "标准规划分支", en: "Core strategy branch" },
      summary: { zh: "你相信好的恋爱是可以规划出来的，只是你的规划太久，心动对象已经被别人领走了。", en: "You believe good love can be planned. You just plan so long that your crush gets recruited by someone else first." },
      tags: { zh: ["可行性优先分析型", "永远在评估从未在恋爱", "PPT式择偶"], en: ["Feasibility-first analyzer", "Always assessing, never dating", "Slide-deck dating"] },
    },
  ],
  CLINGY: [
    {
      key: "melt",
      codeSuffix: "A",
      match: (scores) => scores.cling >= 88,
      title: { zh: "融化型黏性星球", en: "Full Melt Gravity Well" },
      badge: { zh: "恋爱前独立人设置换后挂件模式", en: "Pre-love: independent persona. Post-love: accessory mode" },
      slogan: { zh: "恋爱前你是酷拽独立人，恋爱后你是一个随身挂件。两种都是真的。", en: "Before love you are cool and independent. After love you are a portable accessory. Both are real." },
      stamp: { zh: "融化分支", en: "Melt branch" },
      summary: { zh: "你的独立人格在恋爱后会自动卸载，安装包叫'你在干嘛'。", en: "Your independence auto-uninstalls after dating. The installer is called 'what are you doing.'" },
      tags: { zh: ["人格自动卸载", "恋爱前vs恋爱后判若两人", "你在干嘛安装包"], en: ["Personality auto-uninstall", "Before vs after: two different apps", "'What are you doing' installer"] },
    },
    {
      key: "orbit",
      codeSuffix: "B",
      match: (scores) => scores.drama >= 52,
      title: { zh: "轨道型黏性星球", en: "Orbiting Gravity Well" },
      badge: { zh: "围绕对方公转偶尔还自转焦虑", en: "Orbiting partner, occasionally rotating into anxiety" },
      slogan: { zh: "你没想控制对方，你只是想知道对方此刻和谁在一起、在想什么、消息为什么三分钟了还没回。", en: "You do not want to control them. You just want to know who they are with, what they are thinking, and why the message is three minutes old without a reply." },
      stamp: { zh: "轨道分支", en: "Orbit branch" },
      summary: { zh: "你的关心看起来像定位，但你的出发点是爱。只是爱的GPS信号有点太强了。", en: "Your concern looks like tracking, but it comes from love. Just the GPS signal is a bit too strong." },
      tags: { zh: ["GPS式关心", "确认型安全感", "不是控制但是定位"], en: ["GPS-level caring", "Confirmation-type safety", "Not controlling, just locating"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "标准黏性星球", en: "Standard Gravity Well" },
      badge: { zh: "默认高引力恋爱模式", en: "Default high-gravity love mode" },
      slogan: { zh: "你一旦喜欢上一个人，对方生活的每个角落都会出现你的影子。包括对方不太想让你出现的角落。", en: "Once you like someone, your shadow appears in every corner of their life. Including corners they prefer you not exist in." },
      stamp: { zh: "标准黏人分支", en: "Core cling branch" },
      summary: { zh: "你的恋爱浓度比浓缩咖啡还高，不是所有人都能承受，但你确实就是这么全心全意的。", en: "Your love concentration is stronger than espresso. Not everyone can handle it, but you genuinely are that all-in." },
      tags: { zh: ["浓缩咖啡式恋爱", "不是所有人受得了但就是这么全心", "海星式拥抱"], en: ["Espresso-grade love", "Not for everyone but genuinely all-in", "Starfish hug"] },
    },
  ],
  FLIRT: [
    {
      key: "natural",
      codeSuffix: "A",
      match: (scores) => scores.drama >= 62,
      title: { zh: "天赋型撩完就跑", en: "Naturally Gifted Charm Launcher" },
      badge: { zh: "撩完自己先心跳加速但已经切下一个了", en: "Heart races after flirting, but already moved to the next" },
      slogan: { zh: "你不刻意撩人，你只是存在着就在撩。然后你已经走了。", en: "You do not try to flirt. You just exist and flirt happens. Then you are already gone." },
      stamp: { zh: "天赋分支", en: "Natural gift branch" },
      summary: { zh: "你天生自带社交磁铁功能，问题是你撩的范围太广，广到对方以为你是认真的但其实你对全人类都这样。", en: "You come with a built-in social magnet. The problem is your range is so wide that they think you are serious, but you are like this with everyone." },
      tags: { zh: ["天生撩人对全人类有效", "撩完自己都分不清", "范围广精度低"], en: ["Naturally flirting with all humanity", "Cannot tell who you are serious about", "Wide range, low precision"] },
    },
    {
      key: "hit",
      codeSuffix: "B",
      match: (scores) => scores.hope >= 56,
      title: { zh: "撩完期待型选手", en: "Hopeful Charm Launcher" },
      badge: { zh: "表面在撩内心在赌对方接不接得住", en: "Flirting on the outside, betting on whether they catch on" },
      slogan: { zh: "你嘴上在撩，心里其实在等对方说'我也是'。嘴比心快了一个身位。", en: "Your mouth is flirting. Your heart is waiting for 'me too.' Your mouth is a full body length ahead." },
      stamp: { zh: "期待分支", en: "Hopeful branch" },
      summary: { zh: "你看起来很会撩，其实每次撩完都在偷偷看对方反应。像发弹幕但一直在刷评论区。", en: "You look like a master flirt. Actually, after every flirt, you secretly check their reaction. Like sending a chat message and obsessively refreshing for replies." },
      tags: { zh: ["嘴比心快一个身位", "偷偷等回复选手", "弹幕发完刷评论区"], en: ["Mouth a full length ahead of heart", "Secretly waiting for replies", "Sent the message, refreshing for comments"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "经典撩完选手", en: "Standard Charm Launcher" },
      badge: { zh: "默认社交磁铁模式", en: "Default social magnet mode" },
      slogan: { zh: "你的心动范围是一条六车道高速，但你的恋爱转向灯从来没打过。", en: "Your heartbeat range is a six-lane highway. Your relationship turn signal has never been used." },
      stamp: { zh: "标准撩完分支", en: "Core flirt branch" },
      summary: { zh: "你很会撩，但撩完之后的事情你从来没规划过。第一步是终点也是起点，就是没有第二步。", en: "You are great at flirting. You just never planned what comes after. Step one is both the start and the finish. There is no step two." },
      tags: { zh: ["心动高速无出口", "第一步也是最后一步", "转向灯从未打过"], en: ["Love highway with no exit", "Step one is the whole journey", "Turn signal never activated"] },
    },
  ],
};

const variantVisuals = {
  "SOLO-zen": { emblem: "ZEN", emblemStyle: "calm" },
  "SOLO-pretend": { emblem: "LOL", emblemStyle: "spark" },
  "SOLO-core": { emblem: "1P", emblemStyle: "badge" },
  "WAIT-poet": { emblem: "POEM", emblemStyle: "paper" },
  "WAIT-reformed": { emblem: "ODDS", emblemStyle: "royal" },
  "WAIT-core": { emblem: "SOON", emblemStyle: "badge" },
  "RUSH-repeat": { emblem: "GO", emblemStyle: "warn" },
  "RUSH-hopeful": { emblem: "YES", emblemStyle: "spark" },
  "RUSH-core": { emblem: "FAST", emblemStyle: "warn" },
  "GHOST-overthink": { emblem: "...", emblemStyle: "paper" },
  "GHOST-selective": { emblem: "PRIO", emblemStyle: "royal" },
  "GHOST-core": { emblem: "404", emblemStyle: "badge" },
  "DRAMA-scripted": { emblem: "ACT", emblemStyle: "spark" },
  "DRAMA-live": { emblem: "LIVE", emblemStyle: "warn" },
  "DRAMA-core": { emblem: "PLOT", emblemStyle: "spark" },
  "PLAN-checklist": { emblem: "XLS", emblemStyle: "royal" },
  "PLAN-revised": { emblem: "V02", emblemStyle: "paper" },
  "PLAN-core": { emblem: "SWOT", emblemStyle: "badge" },
  "CLINGY-melt": { emblem: "MERGE", emblemStyle: "warn" },
  "CLINGY-orbit": { emblem: "ORBIT", emblemStyle: "paper" },
  "CLINGY-core": { emblem: "GLUE", emblemStyle: "badge" },
  "FLIRT-natural": { emblem: "SPARK", emblemStyle: "spark" },
  "FLIRT-hit": { emblem: "BET", emblemStyle: "royal" },
  "FLIRT-core": { emblem: "HI", emblemStyle: "spark" },
};

const variantProfileOffsets = {
  "SOLO-zen": { hope: -4, drama: -6, wall: 8, cling: -6, logic: 4 },
  "SOLO-pretend": { hope: 4, drama: 10, wall: -4, cling: 4, logic: -6 },
  "SOLO-core": { hope: -2, drama: 0, wall: 4, cling: 0, logic: 2 },
  "WAIT-poet": { hope: 2, drama: 10, wall: -4, cling: 4, logic: -8 },
  "WAIT-reformed": { hope: 4, drama: -4, wall: 2, cling: -2, logic: 6 },
  "WAIT-core": { hope: 0, drama: 0, wall: 0, cling: 0, logic: 0 },
  "RUSH-repeat": { hope: 2, drama: 10, wall: -4, cling: 6, logic: -4 },
  "RUSH-hopeful": { hope: 8, drama: 0, wall: -4, cling: 2, logic: -2 },
  "RUSH-core": { hope: 2, drama: 2, wall: 0, cling: 0, logic: -2 },
  "GHOST-overthink": { hope: -2, drama: 8, wall: 4, cling: 2, logic: -6 },
  "GHOST-selective": { hope: 2, drama: -6, wall: 2, cling: -4, logic: 8 },
  "GHOST-core": { hope: 0, drama: 0, wall: 2, cling: -2, logic: 2 },
  "DRAMA-scripted": { hope: 2, drama: 8, wall: -4, cling: 4, logic: -4 },
  "DRAMA-live": { hope: 4, drama: 4, wall: -6, cling: 8, logic: -2 },
  "DRAMA-core": { hope: 0, drama: 2, wall: 0, cling: 0, logic: 0 },
  "PLAN-checklist": { hope: -2, drama: -4, wall: 2, cling: -4, logic: 8 },
  "PLAN-revised": { hope: 6, drama: 4, wall: -2, cling: 2, logic: 2 },
  "PLAN-core": { hope: 0, drama: -2, wall: 0, cling: -2, logic: 2 },
  "CLINGY-melt": { hope: 4, drama: 4, wall: -8, cling: 10, logic: -6 },
  "CLINGY-orbit": { hope: 2, drama: 6, wall: -2, cling: 4, logic: -4 },
  "CLINGY-core": { hope: 0, drama: 0, wall: -2, cling: 2, logic: 0 },
  "FLIRT-natural": { hope: 4, drama: 8, wall: -4, cling: 2, logic: -6 },
  "FLIRT-hit": { hope: 6, drama: 2, wall: -2, cling: 4, logic: -2 },
  "FLIRT-core": { hope: 0, drama: 2, wall: 0, cling: -2, logic: -2 },
};

function mergeProfile(baseProfile, offsets) {
  return Object.fromEntries(
    dimensions.map((dimension) => {
      const key = dimension.key;
      return [key, clampScore((baseProfile[key] || 0) + (offsets[key] || 0))];
    })
  );
}

const resultCandidates = archetypes.flatMap((base) =>
  (archetypeVariants[base.code] || []).map((variant) => {
    const variantKey = `${base.code}-${variant.key}`;
    const visual = variantVisuals[variantKey] || { emblem: "!", emblemStyle: "badge" };
    return {
      ...base,
      ...variant,
      ...visual,
      code: `${base.code}-${variant.codeSuffix}`,
      profile: mergeProfile(base.profile, variantProfileOffsets[variantKey] || {}),
    };
  })
);

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  mode: "short",
  result: null,
  lang: localStorage.getItem("nmti-lang") || "zh",
  plazaDropPending: false,
};

const screens = {
  hero: document.querySelector("#hero-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const els = {
  langZh: document.querySelector("#lang-zh"),
  langEn: document.querySelector("#lang-en"),
  modeShort: document.querySelector("#mode-short"),
  modeFull: document.querySelector("#mode-full"),
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroTitle: document.querySelector("#hero-title"),
  heroCopy: document.querySelector("#hero-copy"),
  metricQuestionsLabel: document.querySelector("#metric-questions-label"),
  metricQuestionsValue: document.querySelector("#metric-questions-value"),
  metricTimeLabel: document.querySelector("#metric-time-label"),
  metricTimeValue: document.querySelector("#metric-time-value"),
  metricToneLabel: document.querySelector("#metric-tone-label"),
  metricToneValue: document.querySelector("#metric-tone-value"),
  disclaimerText: document.querySelector("#disclaimer-text"),
  plazaPeek: document.querySelector("#plaza-peek"),
  plazaScreen: document.querySelector("#plaza-screen"),
  plazaEyebrow: document.querySelector("#plaza-eyebrow"),
  plazaTitle: document.querySelector("#plaza-title"),
  plazaCopy: document.querySelector("#plaza-copy"),
  plazaCrowd: document.querySelector("#plaza-crowd"),
  plazaDropKicker: document.querySelector("#plaza-drop-kicker"),
  plazaDropCard: document.querySelector("#plaza-drop-card"),
  plazaDropAura: document.querySelector("#plaza-drop-aura"),
  plazaDropAvatar: document.querySelector("#plaza-drop-avatar"),
  plazaDropTitle: document.querySelector("#plaza-drop-title"),
  plazaDropNote: document.querySelector("#plaza-drop-note"),
  resultPlazaEyebrow: document.querySelector("#result-plaza-eyebrow"),
  resultPlazaTitle: document.querySelector("#result-plaza-title"),
  resultPlazaCopy: document.querySelector("#result-plaza-copy"),
  resultPlazaCrowd: document.querySelector("#result-plaza-crowd"),
  resultPlazaDropKicker: document.querySelector("#result-plaza-drop-kicker"),
  resultPlazaDropCard: document.querySelector("#result-plaza-drop-card"),
  resultPlazaDropAura: document.querySelector("#result-plaza-drop-aura"),
  resultPlazaDropAvatar: document.querySelector("#result-plaza-drop-avatar"),
  resultPlazaDropTitle: document.querySelector("#result-plaza-drop-title"),
  resultPlazaDropNote: document.querySelector("#result-plaza-drop-note"),
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
  resultKicker: document.querySelector("#result-kicker"),
  resultTitle: document.querySelector("#result-title"),
  resultCode: document.querySelector("#result-code"),
  resultSummary: document.querySelector("#result-summary"),
  resultCard: document.querySelector("#result-card"),
  resultDropTrail: document.querySelector("#result-drop-trail"),
  resultImpactRing: document.querySelector("#result-impact-ring"),
  resultAvatar: document.querySelector("#result-avatar"),
  resultAura: document.querySelector("#result-aura"),
  resultEmblem: document.querySelector("#result-emblem"),
  resultBadge: document.querySelector("#result-badge"),
  resultSlogan: document.querySelector("#result-slogan"),
  resultStamp: document.querySelector("#result-stamp"),
  descriptionHeading: document.querySelector("#description-heading"),
  coworkerHeading: document.querySelector("#coworker-heading"),
  radarHeading: document.querySelector("#radar-heading"),
  noteHeading: document.querySelector("#note-heading"),
  noteText: document.querySelector("#note-text"),
  qrFloatText: document.querySelector("#qr-float-text"),
  resultLinkChip: document.querySelector("#result-link-chip"),
  plazaModal: document.querySelector("#plaza-modal"),
  plazaModalBackdrop: document.querySelector("#plaza-modal-backdrop"),
  plazaModalClose: document.querySelector("#plaza-modal-close"),
  plazaModalAvatar: document.querySelector("#plaza-modal-avatar"),
  plazaModalKicker: document.querySelector("#plaza-modal-kicker"),
  plazaModalTitle: document.querySelector("#plaza-modal-title"),
  plazaModalSummary: document.querySelector("#plaza-modal-summary"),
  plazaModalTags: document.querySelector("#plaza-modal-tags"),
  resultDescription: document.querySelector("#result-description"),
  coworkerView: document.querySelector("#coworker-view"),
  resultTags: document.querySelector("#result-tags"),
  scoreList: document.querySelector("#score-list"),
  matchRate: document.querySelector("#match-rate"),
};

function t(value) {
  return typeof value === "string" ? value : value[state.lang];
}

function currentUi() {
  return ui[state.lang];
}

function activeQuestionIndexes() {
  return questionSets[state.mode];
}

function activeQuestionsCount() {
  return activeQuestionIndexes().length;
}

function activeQuestion() {
  return questions[activeQuestionIndexes()[state.index]];
}

function setHeadText() {
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const data = currentUi();

  document.title = data.htmlTitle;
  metaDescription.setAttribute("content", data.metaDescription);
  ogTitle.setAttribute("content", data.ogTitle);
  ogDescription.setAttribute("content", data.ogDescription);
}

function renderStaticUi() {
  const data = currentUi();

  setHeadText();
  els.heroEyebrow.textContent = data.heroEyebrow;
  els.heroTitle.textContent = data.heroTitle;
  els.heroCopy.textContent = data.heroCopy;
  els.plazaEyebrow.textContent = data.plazaEyebrow;
  els.plazaTitle.textContent = data.plazaTitle;
  els.plazaCopy.textContent = data.plazaCopy;
  els.plazaDropKicker.textContent = data.plazaDropKicker;
  els.resultPlazaEyebrow.textContent = data.plazaEyebrow;
  els.resultPlazaTitle.textContent = data.resultPlazaTitle;
  els.resultPlazaCopy.textContent = data.resultPlazaCopy;
  els.resultPlazaDropKicker.textContent = data.resultPlazaDropKicker;
  els.metricQuestionsLabel.textContent = data.metrics.questionsLabel;
  els.metricQuestionsValue.textContent = data.metrics.questionsValue;
  els.metricTimeLabel.textContent = data.metrics.timeLabel;
  els.metricTimeValue.textContent = data.metrics.timeValue;
  els.metricToneLabel.textContent = data.metrics.toneLabel;
  els.metricToneValue.textContent = data.metrics.toneValue;
  els.modeShort.textContent = data.shortMode;
  els.modeFull.textContent = data.fullMode;
  els.modeShort.classList.toggle("active", state.mode === "short");
  els.modeFull.classList.toggle("active", state.mode === "full");
  els.startButton.textContent = data.start;
  els.jumpResultButton.textContent = data.preview;
  els.disclaimerText.textContent = data.disclaimer;
  els.plazaPeek.textContent = data.plazaPeek;
  els.backHomeButton.textContent = data.backHome;
  els.prevButton.textContent = data.prev;
  els.retryTopButton.textContent = data.retryTop;
  els.backTopButton.textContent = data.backTop;
  els.retryButton.textContent = data.retry;
  els.shareButton.textContent = data.share;
  els.resultKicker.textContent = data.resultKicker;
  els.descriptionHeading.textContent = data.descriptionHeading;
  els.coworkerHeading.textContent = data.coworkerHeading;
  els.radarHeading.textContent = data.radarHeading;
  els.noteHeading.textContent = data.noteHeading;
  els.noteText.textContent = data.noteText;
  els.qrFloatText.textContent = data.qrFloatText;
  els.resultLinkChip.textContent = data.qrChipText;
  els.plazaModalKicker.textContent = data.plazaModalKicker;
  els.langZh.classList.toggle("active", state.lang === "zh");
  els.langEn.classList.toggle("active", state.lang === "en");
  renderPlaza();

  if (state.result) {
    renderResult();
  } else if (!screens.quiz.classList.contains("hidden")) {
    renderQuestion();
  }
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
  });
  els.plazaScreen.classList.toggle("hidden", name !== "hero");
  if (name === "hero" && state.result) {
    state.plazaDropPending = true;
    maybeTriggerPlazaDropAnimation();
  }
}

function plazaMembers() {
  return [
    archetypes[3],
    archetypes[4],
    archetypes[6],
    archetypes[0],
    archetypes[7],
    archetypes[1],
    archetypes[5],
    archetypes[2],
    archetypes[0],
    archetypes[4],
    archetypes[1],
    archetypes[6],
  ];
}

function plazaContexts() {
  return [
    {
      crowd: els.plazaCrowd,
      dropAura: els.plazaDropAura,
      dropAvatar: els.plazaDropAvatar,
      dropTitle: els.plazaDropTitle,
      dropNote: els.plazaDropNote,
      dropCard: els.plazaDropCard,
      titleIdle: currentUi().plazaDropTitleIdle,
      noteIdle: currentUi().plazaDropNoteIdle,
      titleReady: currentUi().plazaDropTitleReady,
      noteReady: currentUi().plazaDropNoteReady,
      idleAlt: state.lang === "zh" ? "广场主角" : "Plaza lead",
    },
    {
      crowd: els.resultPlazaCrowd,
      dropAura: els.resultPlazaDropAura,
      dropAvatar: els.resultPlazaDropAvatar,
      dropTitle: els.resultPlazaDropTitle,
      dropNote: els.resultPlazaDropNote,
      dropCard: els.resultPlazaDropCard,
      titleIdle: currentUi().resultPlazaDropTitleIdle,
      noteIdle: currentUi().resultPlazaDropNoteIdle,
      titleReady: currentUi().resultPlazaDropTitleReady,
      noteReady: currentUi().resultPlazaDropNoteReady,
      idleAlt: state.lang === "zh" ? "结果页广场主角" : "Result plaza lead",
    },
  ];
}

function renderPlaza() {
  const crowd = plazaMembers();
  const bubbles = plazaBubblePool[state.lang];
  plazaContexts().forEach((context) => {
    context.crowd.innerHTML = "";
    crowd.forEach((member, index) => {
      const spot = plazaPositions[index % plazaPositions.length];
      const bubble = bubbles[index % bubbles.length];
      const item = document.createElement("div");
      item.className = "plaza-member";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", t(member.title));
      item.dataset.lane = spot.lane;
      item.style.left = spot.left;
      item.style.top = spot.top;
      item.style.animationDelay = spot.delay;
      item.style.setProperty("--member-accent", member.accent);
      item.style.rotate = spot.rotate;
      if (state.result && state.result.avatar === member.avatar) {
        item.classList.add("current");
      }

      item.innerHTML = `
        <div class="plaza-member-avatar-wrap">
          <div class="plaza-member-aura" style="background: radial-gradient(circle, color-mix(in srgb, ${member.accent} 30%, white), transparent 68%);"></div>
          <img class="plaza-member-avatar" src="${member.avatar}" alt="${t(member.title)}">
          <span class="plaza-member-bubble">${bubble}</span>
        </div>
        <span class="plaza-member-label">${t(member.title)}</span>
      `;

      item.addEventListener("click", () => openPlazaModal(member));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPlazaModal(member);
        }
      });

      context.crowd.appendChild(item);
    });

    if (state.result) {
      context.dropAvatar.src = state.result.avatar;
      context.dropAvatar.alt = `${t(state.result.title)} plaza avatar`;
      context.dropTitle.textContent = context.titleReady(t(state.result.title));
      context.dropNote.textContent = context.noteReady;
      context.dropAura.style.background = `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.94), transparent 26%),
        linear-gradient(135deg, color-mix(in srgb, ${state.result.accent} 28%, white), rgba(243, 179, 61, 0.14))
      `;
    } else {
      context.dropAvatar.src = archetypes[0].avatar;
      context.dropAvatar.alt = context.idleAlt;
      context.dropTitle.textContent = context.titleIdle;
      context.dropNote.textContent = context.noteIdle;
      context.dropAura.style.background = `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.94), transparent 26%),
        linear-gradient(135deg, rgba(91, 110, 225, 0.22), rgba(243, 179, 61, 0.14))
      `;
    }
  });
}

function openPlazaModal(member) {
  els.plazaModalAvatar.src = member.avatar;
  els.plazaModalAvatar.alt = t(member.title);
  els.plazaModalTitle.textContent = t(member.title);
  els.plazaModalSummary.textContent = t(member.summary);
  els.plazaModalTags.innerHTML = "";
  member.tags[state.lang].forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.plazaModalTags.appendChild(chip);
  });
  els.plazaModal.classList.remove("hidden");
  els.plazaModal.setAttribute("aria-hidden", "false");
}

function closePlazaModal() {
  els.plazaModal.classList.add("hidden");
  els.plazaModal.setAttribute("aria-hidden", "true");
}

function triggerPlazaDropAnimation() {
  if (!state.result) {
    return;
  }
  state.plazaDropPending = false;
  [els.plazaDropCard, els.resultPlazaDropCard].forEach((card) => {
    card.classList.remove("dropping");
    void card.offsetWidth;
    card.classList.add("dropping");
  });
  window.clearTimeout(triggerPlazaDropAnimation.timer);
  triggerPlazaDropAnimation.timer = window.setTimeout(() => {
    [els.plazaDropCard, els.resultPlazaDropCard].forEach((card) => {
      card.classList.remove("dropping");
    });
  }, 900);
}

function triggerResultAirdropAnimation() {
  [els.resultCard, els.resultAvatar, els.resultAura, els.resultEmblem, els.resultDropTrail, els.resultImpactRing].forEach((element) => {
    element.classList.remove("airdropping");
    element.classList.remove("airdropping-shake");
    void element.offsetWidth;
    element.classList.add("airdropping");
  });
  els.resultCard.classList.add("airdropping-shake");
  window.clearTimeout(triggerResultAirdropAnimation.timer);
  triggerResultAirdropAnimation.timer = window.setTimeout(() => {
    [els.resultCard, els.resultAvatar, els.resultAura, els.resultEmblem, els.resultDropTrail, els.resultImpactRing].forEach((element) => {
      element.classList.remove("airdropping");
      element.classList.remove("airdropping-shake");
    });
  }, 2100);
}

function isPlazaVisible() {
  if (screens.hero.classList.contains("hidden")) {
    return false;
  }
  const rect = els.plazaScreen.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.2;
}

function maybeTriggerPlazaDropAnimation() {
  if (!state.plazaDropPending || !state.result) {
    return;
  }
  if (isPlazaVisible()) {
    triggerPlazaDropAnimation();
  }
}

function optionBadge(option, index) {
  const scores = option.scores;
  const palette = [
    { color: "#db5b2b", zh: "心动", en: "CRUSH" },
    { color: "#1f7a6b", zh: "稳住", en: "CHILL" },
    { color: "#5b6ee1", zh: "冷静", en: "LOGIC" },
    { color: "#536471", zh: "隐身", en: "GHOST" },
    { color: "#f08b2d", zh: "冲了", en: "RUSH" },
  ];

  let key = 0;
  if ((scores.wall || 0) >= 2) {
    key = 3;
  } else if ((scores.hope || 0) >= 2 || (scores.cling || 0) >= 2) {
    key = 0;
  } else if ((scores.logic || 0) >= 2) {
    key = 2;
  } else if ((scores.drama || 0) >= 2 || (scores.cling || 0) >= 1) {
    key = 4;
  } else if ((scores.hope || 0) <= -2 || (scores.cling || 0) <= -2) {
    key = 3;
  } else if ((scores.logic || 0) >= 1) {
    key = 2;
  } else {
    key = index % palette.length;
  }

  return palette[key];
}

function renderQuestion() {
  const questionIndex = activeQuestionIndexes()[state.index];
  const question = questions[questionIndex];
  const answeredIndex = state.answers[questionIndex];
  const total = activeQuestionsCount();
  const progress = ((state.index + 1) / total) * 100;
  const data = currentUi();

  els.questionTag.textContent = t(question.tag);
  els.questionText.textContent = t(question.text);
  els.progressLabel.textContent = data.progress(state.index + 1, total);
  els.progressPercent.textContent = data.questionPercent(Math.round(progress));
  els.progressFill.style.width = `${progress}%`;

  els.optionList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    const badge = optionBadge(option, index);
    button.style.setProperty("--badge-color", badge.color);
    if (answeredIndex === index) {
      button.classList.add("selected");
    }
    button.innerHTML = `
      <div class="option-head">
        <strong>${t(option.title)}</strong>
        <span class="option-badge">${state.lang === "zh" ? badge.zh : badge.en}</span>
      </div>
      <span>${t(option.note)}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[questionIndex] = index;
      button.classList.add("selected");
      window.setTimeout(() => {
        advanceAfterAnswer();
      }, 120);
    });
    els.optionList.appendChild(button);
  });

  els.prevButton.disabled = state.index === 0;
  els.nextButton.textContent = state.index === total - 1 ? data.submit : data.next;
}

function clampScore(value) {
  return Math.max(0, Math.min(100, value));
}

function computeScores() {
  const raw = { drive: 0, social: 0, risk: 0, emotion: 0, control: 0 };

  questions.forEach((question, questionIndex) => {
    if (!activeQuestionIndexes().includes(questionIndex)) {
      return;
    }
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
  const ranked = resultCandidates
    .map((item) => ({ ...item, delta: distance(scores, item.profile) }))
    .sort((left, right) => left.delta - right.delta);

  const best = ranked[0];
  const rawMatch = Math.max(0, Math.min(100, Math.round(100 - Math.sqrt(best.delta) * 0.9)));
  const match = Math.round(63 + rawMatch * 0.37);
  return { ...best, match };
}

function renderResult() {
  const scores = computeScores();
  const result = getBestResult(scores);
  state.result = { ...result, scores };
  const data = currentUi();

  els.resultTitle.textContent = t(result.title);
  els.resultCode.textContent = result.code;
  els.resultSummary.textContent = t(result.summary);
  els.resultAvatar.src = result.avatar;
  els.resultAvatar.alt = `${t(result.title)} ${data.previewAvatarAlt}`;
  els.resultEmblem.textContent = result.emblem || "!";
  els.resultEmblem.dataset.style = result.emblemStyle || "badge";
  els.resultAura.style.background = `
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.92), transparent 28%),
    radial-gradient(circle at 70% 70%, color-mix(in srgb, ${result.accent} 26%, white), transparent 34%),
    linear-gradient(135deg, color-mix(in srgb, ${result.accent} 24%, white), rgba(243, 179, 61, 0.22))
  `;
  els.resultBadge.textContent = t(result.badge);
  els.resultSlogan.textContent = t(result.slogan);
  els.resultStamp.textContent = t(result.stamp);
  document.documentElement.style.setProperty("--result-accent", result.accent);
  els.resultDescription.textContent = t(result.description);
  els.coworkerView.textContent = t(result.coworkerView);
  els.matchRate.textContent = data.matchRate(result.match);

  els.resultTags.innerHTML = "";
  result.tags[state.lang].forEach((tag) => {
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
      <label>${t(dimension.label)}</label>
      <div class="score-track"><div class="score-bar" style="width:${value}%"></div></div>
      <strong>${value}</strong>
    `;
    els.scoreList.appendChild(row);
  });

  triggerResultAirdropAnimation();
  renderPlaza();
  state.plazaDropPending = true;
  maybeTriggerPlazaDropAnimation();
}

function allAnswered() {
  return activeQuestionIndexes().every((index) => state.answers[index] !== null);
}

function startQuiz() {
  state.index = 0;
  state.result = null;
  showScreen("quiz");
  renderQuestion();
}

function resetQuiz() {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  state.plazaDropPending = false;
  renderPlaza();
  startQuiz();
}

function advanceAfterAnswer() {
  if (state.index === activeQuestionsCount() - 1) {
    if (!allAnswered()) {
      window.alert(currentUi().finishAll);
      return;
    }
    renderResult();
    showScreen("result");
    return;
  }

  state.index += 1;
  renderQuestion();
}

function setMode(mode) {
  state.mode = mode;
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  renderStaticUi();
}

function copyShareText() {
  if (!state.result) {
    return;
  }
  const data = currentUi();
  const text = data.shareText({
    title: t(state.result.title),
    code: state.result.code,
    summary: t(state.result.summary),
    match: state.result.match,
    url: window.location.href,
  });

  navigator.clipboard
    .writeText(text)
    .then(() => {
      els.shareButton.textContent = data.copied;
      window.setTimeout(() => {
        els.shareButton.textContent = currentUi().share;
      }, 2000);
    })
    .catch(() => {
      window.alert(text);
    });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("nmti-lang", lang);
  renderStaticUi();
}

els.langZh.addEventListener("click", () => setLanguage("zh"));
els.langEn.addEventListener("click", () => setLanguage("en"));
els.modeShort.addEventListener("click", () => setMode("short"));
els.modeFull.addEventListener("click", () => setMode("full"));
els.startButton.addEventListener("click", startQuiz);
els.jumpResultButton.addEventListener("click", () => {
  state.answers = Array(questions.length).fill(null);
  activeQuestionIndexes().forEach((index) => {
    state.answers[index] = questions[index].options[0] ? 0 : null;
  });
  renderResult();
  showScreen("result");
});
els.backHomeButton.addEventListener("click", () => showScreen("hero"));
els.prevButton.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});
els.nextButton.addEventListener("click", () => {
  const currentQuestionIndex = activeQuestionIndexes()[state.index];

  if (state.answers[currentQuestionIndex] === null) {
    window.alert(currentUi().chooseFirst);
    return;
  }

  advanceAfterAnswer();
});
els.retryButton.addEventListener("click", resetQuiz);
els.retryTopButton.addEventListener("click", resetQuiz);
els.backTopButton.addEventListener("click", () => showScreen("hero"));
els.shareButton.addEventListener("click", copyShareText);
els.plazaModalBackdrop.addEventListener("click", closePlazaModal);
els.plazaModalClose.addEventListener("click", closePlazaModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePlazaModal();
  }
});
window.addEventListener("scroll", maybeTriggerPlazaDropAnimation, { passive: true });
window.addEventListener("resize", maybeTriggerPlazaDropAnimation);

renderStaticUi();
showScreen("hero");
