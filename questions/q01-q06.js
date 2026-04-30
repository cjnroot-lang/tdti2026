// 题库第 1-6 题：情感互动类
// 深夜消息 / 初次约会 / 社交软件 / 表白时机 / 暧昧阶段 / 失恋应对

const questionsBlock1 = [
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
        note: { zh: "战术性已读，战略延迟。在线时长管理是一门必修课。", en: "Tactical delay. Online presence management 101." },
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
        note: { zh: "万一左滑删了一个隐藏款？这叫风险对冲，不是上瘾。", en: "What if I swipe left on a limited edition? This is risk management." },
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
        note: { zh: "喜欢就冲，被拒就换人。人生哪有那么多场前戏。", en: "Shoot your shot. If you miss, next target. Life is too short for prologues." },
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
        note: { zh: "这案子不能我一个人破，得组个复盘专案组。", en: "This case needs a task force. I cannot be the only detective on duty." },
        scores: { logic: 1, drama: 1, cling: 1 },
      },
    ],
  },
];
