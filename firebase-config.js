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
  // Add / remove / rename freely (Army, Royal Navy and RAF are all included) — keep "order" numbers sensible.
  ranks: [
    {"grp": "Army", "code": "Gen", "name": "General", "order": 192},
    {"grp": "Royal Navy", "code": "Adm", "name": "Admiral", "order": 193},
    {"grp": "RAF", "code": "ACM", "name": "Air Chief Marshal", "order": 191},
    {"grp": "Army", "code": "Lt Gen", "name": "Lieutenant General", "order": 182},
    {"grp": "Royal Navy", "code": "V Adm", "name": "Vice Admiral", "order": 183},
    {"grp": "RAF", "code": "AM", "name": "Air Marshal", "order": 181},
    {"grp": "Army", "code": "Maj Gen", "name": "Major General", "order": 172},
    {"grp": "Royal Navy", "code": "R Adm", "name": "Rear Admiral", "order": 173},
    {"grp": "RAF", "code": "AVM", "name": "Air Vice-Marshal", "order": 171},
    {"grp": "Army", "code": "Brig", "name": "Brigadier", "order": 162},
    {"grp": "Royal Navy", "code": "Cdre", "name": "Commodore", "order": 163},
    {"grp": "RAF", "code": "Air Cdre", "name": "Air Commodore", "order": 161},
    {"grp": "Army", "code": "Col", "name": "Colonel", "order": 152},
    {"grp": "Royal Navy", "code": "Capt RN", "name": "Captain (RN)", "order": 153},
    {"grp": "RAF", "code": "Gp Capt", "name": "Group Captain", "order": 151},
    {"grp": "Army", "code": "Lt Col", "name": "Lieutenant Colonel", "order": 142},
    {"grp": "Royal Navy", "code": "Cdr", "name": "Commander", "order": 143},
    {"grp": "RAF", "code": "Wg Cdr", "name": "Wing Commander", "order": 141},
    {"grp": "Army", "code": "Maj", "name": "Major", "order": 132},
    {"grp": "Royal Navy", "code": "Lt Cdr", "name": "Lieutenant Commander", "order": 133},
    {"grp": "RAF", "code": "Sqn Ldr", "name": "Squadron Leader", "order": 131},
    {"grp": "Army", "code": "Capt", "name": "Captain", "order": 122},
    {"grp": "Royal Navy", "code": "Lt RN", "name": "Lieutenant (RN)", "order": 123},
    {"grp": "RAF", "code": "Flt Lt", "name": "Flight Lieutenant", "order": 121},
    {"grp": "Army", "code": "Lt", "name": "Lieutenant", "order": 112},
    {"grp": "Royal Navy", "code": "Sub Lt", "name": "Sub Lieutenant", "order": 113},
    {"grp": "RAF", "code": "Fg Off", "name": "Flying Officer", "order": 111},
    {"grp": "Army", "code": "2Lt", "name": "Second Lieutenant", "order": 102},
    {"grp": "Royal Navy", "code": "Mid", "name": "Midshipman", "order": 103},
    {"grp": "RAF", "code": "Plt Off", "name": "Pilot Officer", "order": 101},
    {"grp": "Army", "code": "WO1", "name": "Warrant Officer Class 1", "order": 92},
    {"grp": "Royal Navy", "code": "WO1 RN", "name": "Warrant Officer 1 (RN)", "order": 93},
    {"grp": "RAF", "code": "WO RAF", "name": "Warrant Officer (RAF)", "order": 91},
    {"grp": "Army", "code": "WO2", "name": "Warrant Officer Class 2", "order": 82},
    {"grp": "Royal Navy", "code": "WO2 RN", "name": "Warrant Officer 2 (RN)", "order": 83},
    {"grp": "Army", "code": "SSgt", "name": "Staff / Colour Sergeant", "order": 72},
    {"grp": "Royal Navy", "code": "CPO", "name": "Chief Petty Officer", "order": 73},
    {"grp": "RAF", "code": "FS", "name": "Flight Sgt / Chief Technician", "order": 71},
    {"grp": "Army", "code": "Sgt", "name": "Sergeant", "order": 62},
    {"grp": "Royal Navy", "code": "PO", "name": "Petty Officer", "order": 63},
    {"grp": "RAF", "code": "Sgt RAF", "name": "Sergeant (RAF)", "order": 61},
    {"grp": "Army", "code": "Cpl", "name": "Corporal", "order": 52},
    {"grp": "Royal Navy", "code": "LH", "name": "Leading Hand", "order": 53},
    {"grp": "RAF", "code": "Cpl RAF", "name": "Corporal (RAF)", "order": 51},
    {"grp": "Army", "code": "LCpl", "name": "Lance Corporal", "order": 42},
    {"grp": "Army", "code": "Pte", "name": "Private", "order": 32},
    {"grp": "Royal Navy", "code": "AB", "name": "Able Rate", "order": 33},
    {"grp": "RAF", "code": "SAC", "name": "Senior Aircraftman", "order": 31},
    {"grp": "RAF", "code": "LAC", "name": "Leading Aircraftman", "order": 21},
    {"grp": "RAF", "code": "AC", "name": "Aircraftman", "order": 11},
    {"grp": "Other", "code": "CIV", "name": "Civilian / Contractor", "order": 0}
  ]
};
