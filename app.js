const dimensions = [
  { key: "drive", label: { zh: "上头值", en: "Drive" } },
  { key: "social", label: { zh: "社交值", en: "Social" } },
  { key: "risk", label: { zh: "冲锋值", en: "Risk" } },
  { key: "emotion", label: { zh: "外放值", en: "Emotion" } },
  { key: "control", label: { zh: "控场值", en: "Control" } },
];

const ui = {
  zh: {
    htmlTitle: "NMTI 牛马人格测试 | 你是卷王、演王、背锅侠还是精神股东？",
    metaDescription: "24道题，测出你的牛马人格。纯娱乐，适合截图发群。",
    ogTitle: "NMTI 牛马人格测试",
    ogDescription: "你是卷王、演王、背锅侠还是精神股东？24道题，3分钟出结果。",
    heroEyebrow: "NMTI / NIUMA TYPE INDICATOR",
    heroTitle: "NMTI 牛马人格测试",
    heroCopy:
      "MBTI 先放一边，NMTI 来了。先看看你在办公室到底是卷王、演王、背锅侠，还是精神股东。",
    metrics: {
      questionsLabel: "题量",
      questionsValue: "24 题",
      timeLabel: "耗时",
      timeValue: "约 3 分钟",
      toneLabel: "风格",
      toneValue: "嘴毒但友好",
    },
    start: "开始测试",
    preview: "我想先看结果风格",
    disclaimer: "仅供娱乐，不适用于招聘、绩效、相亲、分手、升职、裁员和人生审判。",
    backHome: "返回首页",
    progress: (current, total) => `第 ${current} / ${total} 题`,
    questionPercent: (percent) => `${percent}%`,
    prev: "上一题",
    next: "下一题",
    submit: "提交结果",
    resultKicker: "你的 NMTI 类型",
    descriptionHeading: "一句话解读",
    coworkerHeading: "同事视角",
    radarHeading: "你的工位雷达",
    matchRate: (value) => `匹配度 ${value}%`,
    noteHeading: "友情提示",
    noteText: "结果只是你当下的社畜切面，不是永久人格。睡饱一点、发完奖金、换个老板，结果都可能重算。",
    retryTop: "重新测试",
    backTop: "回首页",
    retry: "再测一次",
    share: "复制分享文案",
    copied: "已复制，快去发群",
    defaultSlogan: "你的人设已生成，请谨慎发群。",
    defaultBadge: "工位热搜角色",
    defaultStamp: "办公室民间鉴定版",
    previewAvatarAlt: "NMTI 类型角色插画",
    chooseFirst: "先选一个，再决定命运。",
    finishAll: "还有题没做完，先别急着看结果。",
    shareText: ({ title, code, match, summary, url }) =>
      `我测出来的 NMTI 牛马人格是「${title} ${code}」, 匹配度 ${match}%。\n${summary}\n你也来试试：${url}`,
  },
  en: {
    htmlTitle: "NMTI | Which office creature are you?",
    metaDescription: "24 questions to reveal your office survival type. Petty, playful, and painfully familiar.",
    ogTitle: "NMTI / Not My Task Indicator",
    ogDescription: "Are you the Deadline Berserker, the Blame Tank, or the Emotional Shareholder? 24 questions, 3 minutes.",
    heroEyebrow: "NMTI / NOT MY TASK INDICATOR",
    heroTitle: "NMTI Office Type Test",
    heroCopy:
      "MBTI can sit this one out. NMTI is here. Find out whether you are the office warlord, the blame tank, the cubicle ghost, or the emotional shareholder.",
    metrics: {
      questionsLabel: "Length",
      questionsValue: "24 prompts",
      timeLabel: "Time",
      timeValue: "About 3 min",
      toneLabel: "Tone",
      toneValue: "Mean, but affectionate",
    },
    start: "Start Test",
    preview: "Show Me Sample Result",
    disclaimer: "For fun only. Not valid for hiring, performance reviews, breakups, promotions, layoffs, or destiny.",
    backHome: "Back Home",
    progress: (current, total) => `Question ${current} / ${total}`,
    questionPercent: (percent) => `${percent}%`,
    prev: "Previous",
    next: "Next",
    submit: "See Result",
    resultKicker: "Your NMTI Type",
    descriptionHeading: "One-Line Read",
    coworkerHeading: "Coworker POV",
    radarHeading: "Your Office Radar",
    matchRate: (value) => `${value}% match`,
    noteHeading: "Tiny Disclaimer",
    noteText:
      "This is your current worksona, not your eternal soul. Sleep better, get a bonus, switch bosses, and the result might mutate.",
    retryTop: "Retake",
    backTop: "Home",
    retry: "Try Again",
    share: "Copy Share Text",
    copied: "Copied. Go cause chaos.",
    defaultSlogan: "Character sheet generated. Use responsibly in group chats.",
    defaultBadge: "Certified Office Creature",
    defaultStamp: "Folk Classification Bureau",
    previewAvatarAlt: "NMTI character illustration",
    chooseFirst: "Pick an option before we judge you.",
    finishAll: "You still have unanswered prompts. Finish the damage first.",
    shareText: ({ title, code, match, summary, url }) =>
      `My NMTI office type is "${title} ${code}" with a ${match}% match.\n${summary}\nTry it here: ${url}`,
  },
};

const questions = [
  {
    tag: { zh: "周一早会", en: "Monday Meeting" },
    text: {
      zh: "领导突然问，这周谁来主动顶一个最难的活？",
      en: "Your boss suddenly asks who wants to take the ugliest task of the week. What do you do?",
    },
    options: [
      {
        title: { zh: "我来试试", en: "I can take it" },
        note: { zh: "先接住，边做边想办法。", en: "Catch it first. Figure it out while moving." },
        scores: { drive: 2, risk: 2, control: 1 },
      },
      {
        title: { zh: "先看边界", en: "Clarify the blast radius first" },
        note: { zh: "活不是不能接，但先把坑位问清楚。", en: "I might take it, but not before mapping the trap." },
        scores: { risk: -1, control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "群里通知", en: "Silent Group Chat" },
    text: {
      zh: "项目群里一堆人已读不回，你通常会怎么处理？",
      en: "The project chat is full of ghosts. How do you respond?",
    },
    options: [
      {
        title: { zh: "出来组织一下", en: "I herd the cats" },
        note: { zh: "把人、时间、动作先排清楚。", en: "I line up people, deadlines, and next steps." },
        scores: { social: 2, control: 2 },
      },
      {
        title: { zh: "默默把自己那部分先做完", en: "I just finish my part" },
        note: { zh: "少说多做，别把自己卷进群聊泥潭。", en: "Less chatter, less swamp." },
        scores: { drive: 1, social: -2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "需求突变", en: "Scope Explosion" },
    text: {
      zh: "甲方说方案今晚就要改版，你第一反应是？",
      en: "The client wants a full revision by tonight. Your first reaction?",
    },
    options: [
      {
        title: { zh: "冲吧，先救火", en: "Fine, let's put out the fire" },
        note: { zh: "先把今晚过了，明天再复盘。", en: "Survive tonight. Regret later." },
        scores: { drive: 2, risk: 1, emotion: 1 },
      },
      {
        title: { zh: "先追问变化原因", en: "Ask why this is happening" },
        note: { zh: "不想在错误方向上通宵。", en: "I refuse to stay up late for the wrong problem." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "午饭时间", en: "Lunch Table" },
    text: {
      zh: "同事开始吐槽老板，你在饭桌上一般是什么角色？",
      en: "Coworkers start roasting the boss at lunch. What's your role?",
    },
    options: [
      {
        title: { zh: "主讲人", en: "Lead commentator" },
        note: { zh: "素材丰富，情绪到位，大家都在等你开麦。", en: "The room knows I came prepared." },
        scores: { social: 2, emotion: 2 },
      },
      {
        title: { zh: "冷静旁听", en: "Disciplined spectator" },
        note: { zh: "点到为止，少给聊天记录留把柄。", en: "No need to become discoverable evidence." },
        scores: { social: -1, emotion: -2, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "临时汇报", en: "Surprise Presentation" },
    text: {
      zh: "下午 5 点被拉去临时汇报，你更像哪种人？",
      en: "You are dragged into a surprise presentation at 5 PM. Which are you?",
    },
    options: [
      {
        title: { zh: "现场组织语言型", en: "I freestyle it" },
        note: { zh: "临时上台也能讲得有模有样。", en: "Panic becomes eloquence somehow." },
        scores: { social: 1, emotion: 1, control: 2 },
      },
      {
        title: { zh: "提前写提纲型", en: "I need a quick outline" },
        note: { zh: "不给我 10 分钟整理，我会觉得不尊重。", en: "Ten minutes of prep is basic human dignity." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "工作流", en: "Workflow" },
    text: {
      zh: "碰到新活，你通常先做哪一步？",
      en: "A new assignment lands on your desk. What's step one?",
    },
    options: [
      {
        title: { zh: "先开干", en: "Start moving" },
        note: { zh: "做着做着就清楚了。", en: "Clarity can catch up later." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "先拆任务", en: "Break it down first" },
        note: { zh: "步骤一清晰，后面就没那么乱。", en: "If step one is clean, the rest behaves." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "工位气场", en: "Desk Aura" },
    text: {
      zh: "你在办公室最常出现的状态是？",
      en: "What is your default office aura?",
    },
    options: [
      {
        title: { zh: "耳机一戴，生人勿近", en: "Headphones on. Approach at your own risk." },
        note: { zh: "不要打断我，我在和命运对线。", en: "I am currently arguing with fate." },
        scores: { social: -2, drive: 1 },
      },
      {
        title: { zh: "走来走去，顺手串场", en: "I drift between desks" },
        note: { zh: "我不一定在摸鱼，但我一定在流动。", en: "I may not be slacking, but I am definitely roaming." },
        scores: { social: 2, emotion: 1 },
      },
    ],
  },
  {
    tag: { zh: "背锅现场", en: "Incoming Blame" },
    text: {
      zh: "一个锅空降到你面前，你通常怎么接？",
      en: "A random blame grenade lands in front of you. What now?",
    },
    options: [
      {
        title: { zh: "接了再说", en: "Catch first, argue later" },
        note: { zh: "先保住局面，别让事情炸开。", en: "Stabilize the blast zone before debating ownership." },
        scores: { drive: 1, emotion: 1, risk: 1 },
      },
      {
        title: { zh: "先划清边界", en: "Draw the border first" },
        note: { zh: "锅不是不能背，但责任要记账。", en: "I can carry a mess, but I am not donating accountability." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "群体任务", en: "Group Project" },
    text: {
      zh: "多人协作时，你最舒服的位置是？",
      en: "In a group task, where do you naturally sit?",
    },
    options: [
      {
        title: { zh: "拉齐节奏的人", en: "The alignment engine" },
        note: { zh: "谁慢了谁歪了，我会马上发现。", en: "I instantly notice who slipped or drifted." },
        scores: { social: 1, control: 2 },
      },
      {
        title: { zh: "关键一环的人", en: "The crucial hidden gear" },
        note: { zh: "给我明确交付，我能默默补上。", en: "Give me a clear deliverable and I will quietly carry it." },
        scores: { drive: 2, social: -1 },
      },
    ],
  },
  {
    tag: { zh: "踩点心理", en: "Deadline Brain" },
    text: {
      zh: "DDL 快到了，你的状态更接近？",
      en: "The deadline is close. Which state sounds familiar?",
    },
    options: [
      {
        title: { zh: "越近越来劲", en: "The pressure wakes me up" },
        note: { zh: "没有压迫感就没有灵感。", en: "Apparently fear is my creative director." },
        scores: { drive: 2, risk: 2 },
      },
      {
        title: { zh: "心率先上来", en: "My pulse files a complaint" },
        note: { zh: "我会开始找最稳的收尾路径。", en: "I immediately search for the safest ending." },
        scores: { control: 1, risk: -2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "老板一句话", en: "Boss Vibe Check" },
    text: {
      zh: "老板说“这个你看着办吧”，你会？",
      en: 'Your boss says, "Just handle it." How do you hear that?',
    },
    options: [
      {
        title: { zh: "当作授权", en: "As permission" },
        note: { zh: "自由度到手，先把结果做出来。", en: "Great. Freedom. I move." },
        scores: { drive: 1, risk: 1, control: 1 },
      },
      {
        title: { zh: "当作风险信号", en: "As a red flag" },
        note: { zh: "不写清楚，我晚上都睡不踏实。", en: "If the scope is fuzzy, my sleep is gone." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "开会表现", en: "Meeting Stall" },
    text: {
      zh: "开到第 40 分钟还没结论时，你最可能？",
      en: "The meeting is 40 minutes in and still spinning. What do you do?",
    },
    options: [
      {
        title: { zh: "主动收口", en: "I land the plane" },
        note: { zh: "我来总结，咱们别无限循环。", en: "Let me summarize before we die here." },
        scores: { control: 2, social: 1 },
      },
      {
        title: { zh: "继续观察", en: "I keep reading the room" },
        note: { zh: "先看谁最急，谁先露底牌。", en: "Someone will crack first. I am patient." },
        scores: { social: -1, control: 1, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "情绪管理", en: "Emotional Damage" },
    text: {
      zh: "被临时甩锅或者误解时，你更容易？",
      en: "When you are unfairly blamed or misunderstood, what is more likely?",
    },
    options: [
      {
        title: { zh: "当场有点炸", en: "My face exposes me" },
        note: { zh: "我先不一定骂人，但脸色会说明一切。", en: "I may stay polite, but my expression files a full report." },
        scores: { emotion: 2 },
      },
      {
        title: { zh: "表面平静记小账", en: "I archive the offense" },
        note: { zh: "没事，我都记着。", en: "No drama. Just records." },
        scores: { emotion: -1, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "同事关系", en: "New Coworker" },
    text: {
      zh: "新同事来了，你通常会？",
      en: "A new coworker joins. What do you usually do?",
    },
    options: [
      {
        title: { zh: "主动搭话带一带", en: "I welcome them in" },
        note: { zh: "人先熟了，后面事情都好办。", en: "If people warm up first, work gets easier." },
        scores: { social: 2, emotion: 1 },
      },
      {
        title: { zh: "等对方来找我", en: "I wait for them to approach" },
        note: { zh: "我不是冷漠，我只是不乱社交。", en: "Not cold. Just socially efficient." },
        scores: { social: -2 },
      },
    ],
  },
  {
    tag: { zh: "汇报风格", en: "Reporting Style" },
    text: {
      zh: "做工作汇报时，你更想突出什么？",
      en: "When you present work, what do you emphasize most?",
    },
    options: [
      {
        title: { zh: "结果和气势", en: "Result and impact" },
        note: { zh: "先让对面知道这事成了。", en: "First, make it obvious that the thing landed." },
        scores: { emotion: 1, control: 1, drive: 1 },
      },
      {
        title: { zh: "过程和证据", en: "Process and evidence" },
        note: { zh: "最好别人挑不出逻辑毛病。", en: "I want the logic to survive cross-examination." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "协作风格", en: "Helping Others" },
    text: {
      zh: "同伴卡壳时，你一般会？",
      en: "A teammate is stuck. What is your instinct?",
    },
    options: [
      {
        title: { zh: "过去一起救", en: "Jump in and rescue" },
        note: { zh: "先把人从坑里拉出来再说。", en: "First get them out of the crater." },
        scores: { social: 2, drive: 1 },
      },
      {
        title: { zh: "给框架和建议", en: "Offer a clean framework" },
        note: { zh: "我帮你理思路，但不替你全做。", en: "I will untangle the knot, not live your life for you." },
        scores: { control: 2, social: -1 },
      },
    ],
  },
  {
    tag: { zh: "办公室传说", en: "Office Reputation" },
    text: {
      zh: "别人怎么评价你的工作风格更贴切？",
      en: "Which reputation fits your work style better?",
    },
    options: [
      {
        title: { zh: "这人能扛事", en: "This person can handle heat" },
        note: { zh: "不一定最安静，但关键时刻真会上。", en: "Maybe not the quietest, but absolutely useful under pressure." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "这人很有数", en: "This person knows what's up" },
        note: { zh: "不轻易表态，但表态通常靠谱。", en: "Rarely loud, usually right." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "群聊节奏", en: "Chat Momentum" },
    text: {
      zh: "项目群突然安静了，你通常会？",
      en: "The project chat suddenly goes silent. What do you do?",
    },
    options: [
      {
        title: { zh: "发一句推进", en: "Post a nudge" },
        note: { zh: "别躺了，谁来认领一下。", en: "One of you, please stand up." },
        scores: { social: 1, control: 2, emotion: 1 },
      },
      {
        title: { zh: "单独私聊关键人", en: "DM the key person" },
        note: { zh: "公开催容易散，私下点名更有效。", en: "Public pressure scatters people. Direct pressure lands." },
        scores: { control: 2, social: -1 },
      },
    ],
  },
  {
    tag: { zh: "创新偏好", en: "Risk Appetite" },
    text: {
      zh: "一个方案有点冒险但可能很出彩，你通常？",
      en: "A plan is risky but could be brilliant. Your instinct?",
    },
    options: [
      {
        title: { zh: "想试", en: "Try it" },
        note: { zh: "平平无奇比失败更难受。", en: "Boring hurts me more than failure." },
        scores: { risk: 2, drive: 1 },
      },
      {
        title: { zh: "想保底", en: "Secure the floor first" },
        note: { zh: "先有底线方案，再谈花活。", en: "Baseline first, glory later." },
        scores: { risk: -2, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "下班时刻", en: "Late Ambush" },
    text: {
      zh: "快下班时又冒出一件急活，你会？",
      en: "A last-minute urgent task appears right before you log off. You?",
    },
    options: [
      {
        title: { zh: "继续干完", en: "Stay and finish it" },
        note: { zh: "既然上线了，那就把状态烧到底。", en: "If I am already activated, I may as well burn bright." },
        scores: { drive: 2, emotion: 1 },
      },
      {
        title: { zh: "快速评估，明早处理", en: "Triage and punt to tomorrow" },
        note: { zh: "不是所有急都是真的急。", en: "Not every emergency deserves my evening." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "社交能量", en: "Team Event" },
    text: {
      zh: "团建时你更像哪一类？",
      en: "At a team event, which role feels more like you?",
    },
    options: [
      {
        title: { zh: "带节奏的人", en: "The energy source" },
        note: { zh: "没有我，这桌会安静很多。", en: "Without me, this table loses its soundtrack." },
        scores: { social: 2, emotion: 2 },
      },
      {
        title: { zh: "稳定出现的人", en: "The reliable attendee" },
        note: { zh: "我会到场，但不必让我跳上桌。", en: "I will attend. I will not become content." },
        scores: { social: -1, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "任务认知", en: "Role Boundaries" },
    text: {
      zh: "你怎么看“这活不是我职责，但没人做”？",
      en: 'How do you react to "This is not my job, but nobody else is doing it"?',
    },
    options: [
      {
        title: { zh: "我可能会接", en: "I might pick it up" },
        note: { zh: "事情总得有人推进。", en: "Somebody has to keep the machine moving." },
        scores: { drive: 2, social: 1, risk: 1 },
      },
      {
        title: { zh: "先看值不值得", en: "Depends if it is worth it" },
        note: { zh: "善良可以，白给不行。", en: "Kindness is fine. Free labor is not." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "危机时刻", en: "Crisis Mode" },
    text: {
      zh: "出问题时，你最想先抓住什么？",
      en: "When things go wrong, what do you want first?",
    },
    options: [
      {
        title: { zh: "动作", en: "Action" },
        note: { zh: "先让现场别继续变糟。", en: "Stop the bleeding before analysis." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "原因", en: "Cause" },
        note: { zh: "我得先知道坑是怎么来的。", en: "I need to know where the hole came from." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "个人名片", en: "Personal Brand" },
    text: {
      zh: "如果同事只能用一句话记住你，你更希望是？",
      en: "If coworkers could remember you with one sentence, which would you choose?",
    },
    options: [
      {
        title: { zh: "关键时刻很顶", en: "Clutch under pressure" },
        note: { zh: "平时随便，真打仗的时候我会站出来。", en: "Casual by default. Dangerous when it counts." },
        scores: { drive: 2, emotion: 1 },
      },
      {
        title: { zh: "这个人很稳", en: "Steady and reliable" },
        note: { zh: "把事情交给我，至少不会离谱。", en: "Give it to me. It will not become a circus." },
        scores: { control: 2, risk: -1, emotion: -1 },
      },
    ],
  },
];

const archetypes = [
  {
    code: "BOSS",
    avatar: "./avatars/boss.svg",
    accent: "#1F7A6B",
    title: { zh: "控场总监", en: "Meeting Warlord" },
    badge: { zh: "会议室天降紫微星", en: "Boardroom apex predator" },
    slogan: { zh: "只要你在场，空气里都会自动长出 agenda。", en: "The moment you arrive, the room quietly grows an agenda." },
    stamp: { zh: "控场系高发类型", en: "High-control specimen" },
    summary: { zh: "你走到哪都像在开项目例会，混乱在你面前会自动排队。", en: "Every room starts behaving like a project sync when you enter. Chaos lines up for inspection." },
    description: { zh: "你不是单纯爱指挥，而是天然受不了低效。任务一乱、节奏一散、责任一糊，你就会想站出来把场子接住。", en: "You do not just like directing people. You physically reject inefficiency. Once the task blurs, the timing slips, or ownership gets muddy, you step in and seize the room." },
    coworkerView: { zh: "同事嘴上说你像 PM，心里知道有你在时，事情确实不容易散架。", en: "Coworkers joke that you are basically a PM in disguise, but they also know things fall apart less when you are around." },
    tags: { zh: ["控场上瘾", "收口达人", "会议终结者"], en: ["Control addict", "Closer", "Meeting finisher"] },
    profile: { drive: 70, social: 68, risk: 52, emotion: 40, control: 95 },
  },
  {
    code: "TANK",
    avatar: "./avatars/tank.svg",
    accent: "#596A80",
    title: { zh: "背锅坦克", en: "Blame Tank" },
    badge: { zh: "高压场景指定接盘侠", en: "Emergency-grade damage sponge" },
    slogan: { zh: "锅先别飞，你已经下意识伸手去接了。", en: "Before the blame even lands, you are already halfway to catching it." },
    stamp: { zh: "抗压系高发类型", en: "High-pressure specimen" },
    summary: { zh: "锅先接，场先稳，情绪晚点再说。你是团队的抗压外壳。", en: "You catch the blame, stabilize the scene, and postpone your emotions for later. You are the team's pressure armor." },
    description: { zh: "你不一定最爱表现，但在真出问题的时候，你很难袖手旁观。你身上有一种“先别慌，我来顶一下”的气质。", en: "You may not chase attention, but when things genuinely start burning, you cannot stand aside. You carry a strong 'move, I will hold this' energy." },
    coworkerView: { zh: "大家会不自觉把难题往你这边靠，因为你真的很像能扛住。", en: "People unconsciously push hard problems in your direction because you genuinely look built for impact." },
    tags: { zh: ["关键时刻顶", "先救火再复盘", "抗压壳子"], en: ["Clutch under fire", "Firefighter first", "Pressure shell"] },
    profile: { drive: 88, social: 50, risk: 70, emotion: 54, control: 62 },
  },
  {
    code: "SHOW",
    avatar: "./avatars/show.svg",
    accent: "#FF6F61",
    title: { zh: "气氛演王", en: "Office Main Character" },
    badge: { zh: "办公室综艺感担当", en: "Certified workplace showrunner" },
    slogan: { zh: "你不是在上班，你是在给工位配 BGM 和旁白。", en: "You are not just working. You are scoring the office with music and commentary." },
    stamp: { zh: "社交系高发类型", en: "High-social specimen" },
    summary: { zh: "你不仅在上班，也在给整个办公室提供情绪和戏剧张力。", en: "You do not simply work. You supply the office with tone, tension, and entertainment." },
    description: { zh: "你擅长把沉闷局面盘活，也擅长把一个普通吐槽讲成连续剧。你是团队里的扩音器，也是团建里的天然发动机。", en: "You can revive a dead room and turn a simple complaint into a whole season of television. You are both the amplifier and the engine of workplace social life." },
    coworkerView: { zh: "有你在，办公室不无聊；没有你，群聊会像失去 BGM。", en: "With you around, the office is alive. Without you, the group chat loses its soundtrack." },
    tags: { zh: ["情绪输出", "团建主舞台", "吐槽段子手"], en: ["Emotion broadcast", "Team-event magnet", "Complaint comedian"] },
    profile: { drive: 58, social: 92, risk: 58, emotion: 95, control: 46 },
  },
  {
    code: "GHOST",
    avatar: "./avatars/ghost.svg",
    accent: "#536471",
    title: { zh: "工位隐身人", en: "Cubicle Ghost" },
    badge: { zh: "低存在感高交付体质", en: "Low-visibility high-output form" },
    slogan: { zh: "平时像离线，交付时像突然从云里刷新出来。", en: "Most days you feel offline. Then deliverables materialize like a system update." },
    stamp: { zh: "静默系高发类型", en: "Quiet-mode specimen" },
    summary: { zh: "你看着安静，实际上在后台默默把很多关键零件补齐了。", en: "You seem quiet, but you are silently patching the machinery behind the scenes." },
    description: { zh: "你不抢存在感，也不爱空转社交，但你通常知道自己在干什么。别人注意不到你的时候，反而是你效率最高的时候。", en: "You do not chase visibility or pointless interaction, but you usually know exactly what you are doing. Your best work happens when nobody is paying attention." },
    coworkerView: { zh: "平时像消失，交付时像突然从云里掏出一个完整答案。", en: "You seem absent until a finished answer appears out of nowhere." },
    tags: { zh: ["静音高效", "拒绝空聊", "存在感后置"], en: ["Silent efficiency", "No filler talk", "Delayed presence"] },
    profile: { drive: 68, social: 18, risk: 36, emotion: 20, control: 78 },
  },
  {
    code: "BRAIN",
    avatar: "./avatars/brain.svg",
    accent: "#5B6EE1",
    title: { zh: "冷面军师", en: "Cold Strategist" },
    badge: { zh: "逻辑脑内置完整版", en: "Fully licensed internal logic engine" },
    slogan: { zh: "别人还在吵，你已经在脑内画完流程图了。", en: "While others argue, you are already finishing the flowchart in your head." },
    stamp: { zh: "军师系高发类型", en: "Strategist specimen" },
    summary: { zh: "你不是最吵的那个，但通常是最先看懂局势的那个。", en: "You are rarely the loudest person in the room, but often the first to understand the board." },
    description: { zh: "你对边界、逻辑和因果关系很敏感。别人还在吵时，你已经在想真正的问题在哪里，以及最稳的修法是什么。", en: "You are highly sensitive to scope, logic, and causality. While others are still reacting, you are already identifying the real problem and the cleanest fix." },
    coworkerView: { zh: "你说话不多，但一开口往往就是“这事真正卡的点在这儿”。", en: "You do not speak often, but when you do, it tends to sound like, 'Here is the actual bottleneck.'" },
    tags: { zh: ["逻辑自洽", "稳健保底", "风险扫描仪"], en: ["Logically sealed", "Safe by design", "Risk scanner"] },
    profile: { drive: 52, social: 34, risk: 16, emotion: 18, control: 92 },
  },
  {
    code: "SPARK",
    avatar: "./avatars/spark.svg",
    accent: "#73B44A",
    title: { zh: "整活发动机", en: "Chaos Catalyst" },
    badge: { zh: "灵感和热闹双供给源", en: "Dual supplier of novelty and noise" },
    slogan: { zh: "你走到哪，哪里就开始像一个临时节目组。", en: "Wherever you go, the room starts behaving like a pop-up production crew." },
    stamp: { zh: "创意系高发类型", en: "Creative specimen" },
    summary: { zh: "你是那种会把办公室做成真人秀副本的人，热闹和点子都很多。", en: "You are the sort of person who turns an office into a reality show side quest. Loud ideas, lively energy." },
    description: { zh: "你喜欢流动、喜欢互相碰撞，也不怕把场面搞活。你的价值不只在执行，还在于给团队带来变化和动能。", en: "You enjoy motion, friction, and the spark that comes from collisions. Your value is not just execution. You inject momentum and change into the team." },
    coworkerView: { zh: "你可能偶尔分散注意力，但也常常顺手点燃了整个团队的气氛。", en: "You may occasionally derail focus, but you also ignite the room with alarming consistency." },
    tags: { zh: ["气氛带电", "创意乱入", "走到哪聊到哪"], en: ["Charged atmosphere", "Creative intrusion", "Portable side plot"] },
    profile: { drive: 60, social: 84, risk: 66, emotion: 78, control: 42 },
  },
  {
    code: "HERO",
    avatar: "./avatars/hero.svg",
    accent: "#F08B2D",
    title: { zh: "自燃卷王", en: "Deadline Berserker" },
    badge: { zh: "DDL 充能型生物", en: "Deadline-powered lifeform" },
    slogan: { zh: "压力一来，你的战斗模式和黑眼圈会同时点亮。", en: "The pressure hits and both your battle mode and eye bags light up together." },
    stamp: { zh: "燃烧系高发类型", en: "Combustion specimen" },
    summary: { zh: "别人是被推动，你是会自己点火。压力一来，你反而更像进入战斗模式。", en: "Other people need a push. You self-ignite. The closer the pressure gets, the more combat-ready you become." },
    description: { zh: "你对任务有天然的推进欲，一旦进入状态，很容易不知不觉把自己烧过头。你厉害，也容易累。", en: "You have a natural urge to push tasks forward, and once activated, you tend to burn past reasonable limits. Effective, yes. Sustainable, questionable." },
    coworkerView: { zh: "大家一边心疼你太拼，一边庆幸关键节点有你这种人存在。", en: "People worry about how hard you push yourself, while secretly feeling lucky you exist at critical moments." },
    tags: { zh: ["自驱爆表", "压力增益", "高压推进器"], en: ["Self-propelled", "Pressure buff", "High-stress engine"] },
    profile: { drive: 96, social: 44, risk: 74, emotion: 46, control: 72 },
  },
  {
    code: "HOLD",
    avatar: "./avatars/hold.svg",
    accent: "#B49B5F",
    title: { zh: "精神股东", en: "Emotional Shareholder" },
    badge: { zh: "项目情绪持股人", en: "Unofficial owner of team feelings" },
    slogan: { zh: "你未必永远在前线，但你永远精神上全仓。", en: "You may not always be on the front line, but spiritually you are all-in." },
    stamp: { zh: "代入系高发类型", en: "Attachment specimen" },
    summary: { zh: "你对团队有强烈参与感，虽然不一定时时冲前线，但一定时时在线上。", en: "You feel deeply invested in the team. Maybe not always at the front, but emotionally you are permanently online." },
    description: { zh: "你最强的是整体感和代入感。这个事成了你真高兴，炸了你也真上火。你像团队的情绪持股人。", en: "Your strongest trait is identification with the whole. If the project wins, you glow. If it crashes, you feel it in your blood pressure. You are the emotional shareholder of the team." },
    coworkerView: { zh: "你未必永远在 C 位，但你对全局的关注度常常比当事人还高。", en: "You may not always be center stage, but your concern for the whole picture often exceeds that of the actual owners." },
    tags: { zh: ["全局入戏", "高度代入", "远程操心"], en: ["Fully invested", "Deeply attached", "Remote worrying"] },
    profile: { drive: 54, social: 72, risk: 44, emotion: 70, control: 68 },
  },
];

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  result: null,
  lang: localStorage.getItem("nmti-lang") || "zh",
};

const screens = {
  hero: document.querySelector("#hero-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const els = {
  langZh: document.querySelector("#lang-zh"),
  langEn: document.querySelector("#lang-en"),
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
  resultAvatar: document.querySelector("#result-avatar"),
  resultBadge: document.querySelector("#result-badge"),
  resultSlogan: document.querySelector("#result-slogan"),
  resultStamp: document.querySelector("#result-stamp"),
  descriptionHeading: document.querySelector("#description-heading"),
  coworkerHeading: document.querySelector("#coworker-heading"),
  radarHeading: document.querySelector("#radar-heading"),
  noteHeading: document.querySelector("#note-heading"),
  noteText: document.querySelector("#note-text"),
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
  els.metricQuestionsLabel.textContent = data.metrics.questionsLabel;
  els.metricQuestionsValue.textContent = data.metrics.questionsValue;
  els.metricTimeLabel.textContent = data.metrics.timeLabel;
  els.metricTimeValue.textContent = data.metrics.timeValue;
  els.metricToneLabel.textContent = data.metrics.toneLabel;
  els.metricToneValue.textContent = data.metrics.toneValue;
  els.startButton.textContent = data.start;
  els.jumpResultButton.textContent = data.preview;
  els.disclaimerText.textContent = data.disclaimer;
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
  els.langZh.classList.toggle("active", state.lang === "zh");
  els.langEn.classList.toggle("active", state.lang === "en");

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
}

function renderQuestion() {
  const question = questions[state.index];
  const answeredIndex = state.answers[state.index];
  const progress = ((state.index + 1) / questions.length) * 100;
  const data = currentUi();

  els.questionTag.textContent = t(question.tag);
  els.questionText.textContent = t(question.text);
  els.progressLabel.textContent = data.progress(state.index + 1, questions.length);
  els.progressPercent.textContent = data.questionPercent(Math.round(progress));
  els.progressFill.style.width = `${progress}%`;

  els.optionList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answeredIndex === index) {
      button.classList.add("selected");
    }
    button.innerHTML = `<strong>${t(option.title)}</strong><span>${t(option.note)}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.index] = index;
      renderQuestion();
    });
    els.optionList.appendChild(button);
  });

  els.prevButton.disabled = state.index === 0;
  els.nextButton.textContent = state.index === questions.length - 1 ? data.submit : data.next;
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
  const data = currentUi();

  els.resultTitle.textContent = t(result.title);
  els.resultCode.textContent = result.code;
  els.resultSummary.textContent = t(result.summary);
  els.resultAvatar.src = result.avatar;
  els.resultAvatar.alt = `${t(result.title)} ${data.previewAvatarAlt}`;
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
}

function allAnswered() {
  return state.answers.every((item) => item !== null);
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
  startQuiz();
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
    window.alert(currentUi().chooseFirst);
    return;
  }

  if (state.index === questions.length - 1) {
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
});
els.retryButton.addEventListener("click", resetQuiz);
els.retryTopButton.addEventListener("click", resetQuiz);
els.backTopButton.addEventListener("click", () => showScreen("hero"));
els.shareButton.addEventListener("click", copyShareText);

renderStaticUi();
showScreen("hero");
