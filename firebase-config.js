/* ──────────────────────────────────────────────────────────────
   MOVE-TRACK CONFIGURATION  (safe to commit — these values are NOT secrets;
   the database RULES in database.rules.json are what protect your data)

   1. Firebase console → Project settings → "Your apps" → add a Web app → copy the values below.
   2. Do not change usernameDomain after users exist.
   ────────────────────────────────────────────────────────────── */
window.MT_CONFIG = {
  firebase: {
    apiKey:      "AIzaSyBgXiDOvvc0YmpdhiUXUP97oGocoZ-lUv0",
    authDomain:  "arctest-f320b.firebaseapp.com",
    databaseURL: "https://arctest-f320b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId:   "arctest-f320b",
    appId:       "1:748520132225:web:ead1255430d9ad162d4780"
  },

  // Usernames are turned into fake emails "<username>@<usernameDomain>". No email is ever sent.
  usernameDomain: "movetrack.local",

  // Minutes of inactivity before auto-logout. The admin can override this per user (0 = never).
  defaultIdleMinutes: 30,

  // UK rank list shown in the drop-downs. Highest "order" sorts to the top of the board.
  // Add / remove / rename freely (e.g. add RN or RAF ranks) — keep "order" numbers sensible.
  ranks: [
    {code:"Gen",    name:"General",                 order:17},
    {code:"Lt Gen", name:"Lieutenant General",      order:16},
    {code:"Maj Gen",name:"Major General",           order:15},
    {code:"Brig",   name:"Brigadier",               order:14},
    {code:"Col",    name:"Colonel",                 order:13},
    {code:"Lt Col", name:"Lieutenant Colonel",      order:12},
    {code:"Maj",    name:"Major",                   order:11},
    {code:"Capt",   name:"Captain",                 order:10},
    {code:"Lt",     name:"Lieutenant",              order:9},
    {code:"2Lt",    name:"Second Lieutenant",       order:8},
    {code:"WO1",    name:"Warrant Officer Class 1", order:7},
    {code:"WO2",    name:"Warrant Officer Class 2", order:6},
    {code:"SSgt",   name:"Staff Sergeant",          order:5},
    {code:"Sgt",    name:"Sergeant",                order:4},
    {code:"Cpl",    name:"Corporal",                order:3},
    {code:"LCpl",   name:"Lance Corporal",          order:2},
    {code:"Pte",    name:"Private",                 order:1},
    {code:"CIV",    name:"Civilian / Contractor",   order:0}
  ]
};
