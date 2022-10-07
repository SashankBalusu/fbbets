import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3MELEmVzRcCJnO5VzdDiVoftYqOD1sw",
  authDomain: "fbbets-19d60.firebaseapp.com",
  databaseURL: "https://fbbets-19d60-default-rtdb.firebaseio.com",
  projectId: "fbbets-19d60",
  storageBucket: "fbbets-19d60.appspot.com",
  messagingSenderId: "218823784817",
  appId: "1:218823784817:web:d1966a926eed358c255ed0",
  measurementId: "G-VZJS1CD1VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const group = urlParams.get('group')
let name1, name2
const scheduleJSON = [
    {
      "1": "KC",
      "2": "@LV",
      "3": "LAR",
      "4": "@CAR",
      "5": "PHI",
      "6": "@SEA",
      "7": "NO",
      "8": "@MIN",
      "9": "SEA",
      "10": "@LAR",
      "11": "SF",
      "12": "LAC",
      "13": "BYE",
      "14": "NE",
      "15": "@DEN",
      "16": "TB",
      "17": "@ATL",
      "18": "@SF",
      "TEAM": "ARI"
    },
    {
      "1": "NO",
      "2": "@LAR",
      "3": "@SEA",
      "4": "CLE",
      "5": "@TB",
      "6": "SF",
      "7": "@CIN",
      "8": "CAR",
      "9": "LAC",
      "10": "@CAR",
      "11": "CHI",
      "12": "@WSH",
      "13": "PIT",
      "14": "BYE",
      "15": "@NO",
      "16": "@BAL",
      "17": "ARI",
      "18": "TB",
      "TEAM": "ATL"
    },
    {
      "1": "@NYJ",
      "2": "MIA",
      "3": "@NE",
      "4": "BUF",
      "5": "CIN",
      "6": "@NYG",
      "7": "CLE",
      "8": "@TB",
      "9": "@NO",
      "10": "BYE",
      "11": "CAR",
      "12": "@JAX",
      "13": "DEN",
      "14": "@PIT",
      "15": "@CLE",
      "16": "ATL",
      "17": "PIT",
      "18": "@CIN",
      "TEAM": "BAL"
    },
    {
      "1": "@LAR",
      "2": "TEN",
      "3": "@MIA",
      "4": "@BAL",
      "5": "PIT",
      "6": "@KC",
      "7": "BYE",
      "8": "GB",
      "9": "@NYJ",
      "10": "MIN",
      "11": "CLE",
      "12": "@DET",
      "13": "@NE",
      "14": "NYJ",
      "15": "MIA",
      "16": "@CHI",
      "17": "@CIN",
      "18": "NE",
      "TEAM": "BUF"
    },
    {
      "1": "CLE",
      "2": "@NYG",
      "3": "NO",
      "4": "ARI",
      "5": "SF",
      "6": "@LAR",
      "7": "TB",
      "8": "@ATL",
      "9": "@CIN",
      "10": "ATL",
      "11": "@BAL",
      "12": "DEN",
      "13": "BYE",
      "14": "@SEA",
      "15": "PIT",
      "16": "DET",
      "17": "@TB",
      "18": "@NO",
      "TEAM": "CAR"
    },
    {
      "1": "SF",
      "2": "@GB",
      "3": "HOU",
      "4": "@NYG",
      "5": "@MIN",
      "6": "WSH",
      "7": "@NE",
      "8": "@DAL",
      "9": "MIA",
      "10": "DET",
      "11": "@ATL",
      "12": "@NYJ",
      "13": "GB",
      "14": "BYE",
      "15": "PHI",
      "16": "BUF",
      "17": "@DET",
      "18": "MIN",
      "TEAM": "CHI"
    },
    {
      "1": "PIT",
      "2": "@DAL",
      "3": "@NYJ",
      "4": "MIA",
      "5": "@BAL",
      "6": "@NO",
      "7": "ATL",
      "8": "@CLE",
      "9": "CAR",
      "10": "BYE",
      "11": "@PIT",
      "12": "@TEN",
      "13": "KC",
      "14": "CLE",
      "15": "@TB",
      "16": "@NE",
      "17": "BUF",
      "18": "BAL",
      "TEAM": "CIN"
    },
    {
      "1": "@CAR",
      "2": "NYJ",
      "3": "PIT",
      "4": "@ATL",
      "5": "LAC",
      "6": "NE",
      "7": "@BAL",
      "8": "CIN",
      "9": "BYE",
      "10": "@MIA",
      "11": "@BUF",
      "12": "TB",
      "13": "@HOU",
      "14": "@CIN",
      "15": "BAL",
      "16": "NO",
      "17": "@WSH",
      "18": "@PIT",
      "TEAM": "CLE"
    },
    {
      "1": "TB",
      "2": "CIN",
      "3": "@NYG",
      "4": "WSH",
      "5": "@LAR",
      "6": "@PHI",
      "7": "DET",
      "8": "CHI",
      "9": "BYE",
      "10": "@GB",
      "11": "@MIN",
      "12": "NYG",
      "13": "IND",
      "14": "HOU",
      "15": "@JAX",
      "16": "PHI",
      "17": "@TEN",
      "18": "@WSH",
      "TEAM": "DAL"
    },
    {
      "1": "@SEA",
      "2": "HOU",
      "3": "SF",
      "4": "@LV",
      "5": "IND",
      "6": "@LAC",
      "7": "NYJ",
      "8": "@JAX",
      "9": "BYE",
      "10": "@TEN",
      "11": "LV",
      "12": "@CAR",
      "13": "@BAL",
      "14": "KC",
      "15": "ARI",
      "16": "@LAR",
      "17": "@KC",
      "18": "LAC",
      "TEAM": "DEN"
    },
    {
      "1": "PHI",
      "2": "WSH",
      "3": "@MIN",
      "4": "SEA",
      "5": "@NE",
      "6": "BYE",
      "7": "@DAL",
      "8": "MIA",
      "9": "GB",
      "10": "@CHI",
      "11": "@NYG",
      "12": "BUF",
      "13": "JAX",
      "14": "MIN",
      "15": "@NYJ",
      "16": "@CAR",
      "17": "CHI",
      "18": "@GB",
      "TEAM": "DET"
    },
    {
      "1": "@MIN",
      "2": "CHI",
      "3": "@TB",
      "4": "NE",
      "5": "NYG",
      "6": "NYJ",
      "7": "@WSH",
      "8": "@BUF",
      "9": "@DET",
      "10": "DAL",
      "11": "TEN",
      "12": "@PHI",
      "13": "@CHI",
      "14": "BYE",
      "15": "LAR",
      "16": "@MIA",
      "17": "MIN",
      "18": "DET",
      "TEAM": "GB"
    },
    {
      "1": "IND",
      "2": "@DEN",
      "3": "@CHI",
      "4": "LAC",
      "5": "@JAX",
      "6": "BYE",
      "7": "@LV",
      "8": "TEN",
      "9": "PHI",
      "10": "@NYG",
      "11": "WSH",
      "12": "@MIA",
      "13": "CLE",
      "14": "@DAL",
      "15": "KC",
      "16": "@TEN",
      "17": "JAX",
      "18": "@IND",
      "TEAM": "HOU"
    },
    {
      "1": "@HOU",
      "2": "@JAX",
      "3": "KC",
      "4": "TEN",
      "5": "@DEN",
      "6": "JAX",
      "7": "@TEN",
      "8": "WSH",
      "9": "@NE",
      "10": "@LV",
      "11": "PHI",
      "12": "PIT",
      "13": "@DAL",
      "14": "BYE",
      "15": "@MIN",
      "16": "LAC",
      "17": "@NYG",
      "18": "HOU",
      "TEAM": "IND"
    },
    {
      "1": "@WSH",
      "2": "IND",
      "3": "@LAC",
      "4": "@PHI",
      "5": "HOU",
      "6": "@IND",
      "7": "NYG",
      "8": "DEN",
      "9": "LV",
      "10": "@KC",
      "11": "BYE",
      "12": "BAL",
      "13": "@DET",
      "14": "@TEN",
      "15": "DAL",
      "16": "@NYJ",
      "17": "@HOU",
      "18": "TEN",
      "TEAM": "JAX"
    },
    {
      "1": "@ARI",
      "2": "LAC",
      "3": "@IND",
      "4": "@TB",
      "5": "LV",
      "6": "BUF",
      "7": "@SF",
      "8": "BYE",
      "9": "TEN",
      "10": "JAX",
      "11": "@LAC",
      "12": "LAR",
      "13": "@CIN",
      "14": "@DEN",
      "15": "@HOU",
      "16": "SEA",
      "17": "DEN",
      "18": "@LV",
      "TEAM": "KC"
    },
    {
      "1": "@LAC",
      "2": "ARI",
      "3": "@TEN",
      "4": "DEN",
      "5": "@KC",
      "6": "BYE",
      "7": "HOU",
      "8": "@NO",
      "9": "@JAX",
      "10": "IND",
      "11": "@DEN",
      "12": "@SEA",
      "13": "LAC",
      "14": "@LAR",
      "15": "NE",
      "16": "@PIT",
      "17": "SF",
      "18": "KC",
      "TEAM": "LV"
    },
    {
      "1": "BUF",
      "2": "ATL",
      "3": "@ARI",
      "4": "@SF",
      "5": "DAL",
      "6": "CAR",
      "7": "BYE",
      "8": "SF",
      "9": "@TB",
      "10": "ARI",
      "11": "@NO",
      "12": "@KC",
      "13": "SEA",
      "14": "LV",
      "15": "@GB",
      "16": "DEN",
      "17": "@LAC",
      "18": "@SEA",
      "TEAM": "LAR"
    },
    {
      "1": "LV",
      "2": "@KC",
      "3": "JAX",
      "4": "@HOU",
      "5": "@CLE",
      "6": "DEN",
      "7": "SEA",
      "8": "BYE",
      "9": "@ATL",
      "10": "@SF",
      "11": "KC",
      "12": "@ARI",
      "13": "@LV",
      "14": "MIA",
      "15": "TEN",
      "16": "@IND",
      "17": "LAR",
      "18": "@DEN",
      "TEAM": "LAC"
    },
    {
      "1": "NE",
      "2": "@BAL",
      "3": "BUF",
      "4": "@CIN",
      "5": "@NYJ",
      "6": "MIN",
      "7": "PIT",
      "8": "@DET",
      "9": "@CHI",
      "10": "CLE",
      "11": "BYE",
      "12": "HOU",
      "13": "@SF",
      "14": "@LAC",
      "15": "@BUF",
      "16": "GB",
      "17": "@NE",
      "18": "NYJ",
      "TEAM": "MIA"
    },
    {
      "1": "GB",
      "2": "@PHI",
      "3": "DET",
      "4": "@NO",
      "5": "CHI",
      "6": "@MIA",
      "7": "BYE",
      "8": "ARI",
      "9": "@WSH",
      "10": "@BUF",
      "11": "DAL",
      "12": "NE",
      "13": "NYJ",
      "14": "@DET",
      "15": "IND",
      "16": "NYG",
      "17": "@GB",
      "18": "@CHI",
      "TEAM": "MIN"
    },
    {
      "1": "@MIA",
      "2": "@PIT",
      "3": "BAL",
      "4": "@GB",
      "5": "DET",
      "6": "@CLE",
      "7": "CHI",
      "8": "@NYJ",
      "9": "IND",
      "10": "BYE",
      "11": "NYJ",
      "12": "@MIN",
      "13": "BUF",
      "14": "@ARI",
      "15": "@LV",
      "16": "CIN",
      "17": "MIA",
      "18": "@BUF",
      "TEAM": "NE"
    },
    {
      "1": "@ATL",
      "2": "TB",
      "3": "@CAR",
      "4": "MIN",
      "5": "SEA",
      "6": "CIN",
      "7": "@ARI",
      "8": "LV",
      "9": "BAL",
      "10": "@PIT",
      "11": "LAR",
      "12": "@SF",
      "13": "@TB",
      "14": "BYE",
      "15": "ATL",
      "16": "@CLE",
      "17": "@PHI",
      "18": "CAR",
      "TEAM": "NO"
    },
    {
      "1": "@TEN",
      "2": "CAR",
      "3": "DAL",
      "4": "CHI",
      "5": "@GB",
      "6": "BAL",
      "7": "@JAX",
      "8": "@SEA",
      "9": "BYE",
      "10": "HOU",
      "11": "DET",
      "12": "@DAL",
      "13": "WSH",
      "14": "PHI",
      "15": "@WSH",
      "16": "@MIN",
      "17": "IND",
      "18": "@PHI",
      "TEAM": "NYG"
    },
    {
      "1": "BAL",
      "2": "@CLE",
      "3": "CIN",
      "4": "@PIT",
      "5": "MIA",
      "6": "@GB",
      "7": "@DEN",
      "8": "NE",
      "9": "BUF",
      "10": "BYE",
      "11": "@NE",
      "12": "CHI",
      "13": "@MIN",
      "14": "@BUF",
      "15": "DET",
      "16": "JAX",
      "17": "@SEA",
      "18": "@MIA",
      "TEAM": "NYJ"
    },
    {
      "1": "@DET",
      "2": "MIN",
      "3": "@WSH",
      "4": "JAX",
      "5": "@ARI",
      "6": "DAL",
      "7": "BYE",
      "8": "PIT",
      "9": "@HOU",
      "10": "WSH",
      "11": "@IND",
      "12": "GB",
      "13": "TEN",
      "14": "@NYG",
      "15": "@CHI",
      "16": "@DAL",
      "17": "NO",
      "18": "NYG",
      "TEAM": "PHI"
    },
    {
      "1": "@CIN",
      "2": "NE",
      "3": "@CLE",
      "4": "NYJ",
      "5": "@BUF",
      "6": "TB",
      "7": "@MIA",
      "8": "@PHI",
      "9": "BYE",
      "10": "NO",
      "11": "CIN",
      "12": "@IND",
      "13": "@ATL",
      "14": "BAL",
      "15": "@CAR",
      "16": "LV",
      "17": "@BAL",
      "18": "CLE",
      "TEAM": "PIT"
    },
    {
      "1": "@CHI",
      "2": "SEA",
      "3": "@DEN",
      "4": "LAR",
      "5": "@CAR",
      "6": "@ATL",
      "7": "KC",
      "8": "@LAR",
      "9": "BYE",
      "10": "LAC",
      "11": "@ARI",
      "12": "NO",
      "13": "MIA",
      "14": "TB",
      "15": "@SEA",
      "16": "WSH",
      "17": "@LV",
      "18": "ARI",
      "TEAM": "SF"
    },
    {
      "1": "DEN",
      "2": "@SF",
      "3": "ATL",
      "4": "@DET",
      "5": "@NO",
      "6": "ARI",
      "7": "@LAC",
      "8": "NYG",
      "9": "@ARI",
      "10": "@TB",
      "11": "BYE",
      "12": "LV",
      "13": "@LAR",
      "14": "CAR",
      "15": "SF",
      "16": "@KC",
      "17": "NYJ",
      "18": "LAR",
      "TEAM": "SEA"
    },
    {
      "1": "@DAL",
      "2": "@NO",
      "3": "GB",
      "4": "KC",
      "5": "ATL",
      "6": "@PIT",
      "7": "@CAR",
      "8": "BAL",
      "9": "LAR",
      "10": "SEA",
      "11": "BYE",
      "12": "@CLE",
      "13": "NO",
      "14": "@SF",
      "15": "CIN",
      "16": "@ARI",
      "17": "CAR",
      "18": "@ATL",
      "TEAM": "TB"
    },
    {
      "1": "NYG",
      "2": "@BUF",
      "3": "LV",
      "4": "@IND",
      "5": "@WSH",
      "6": "BYE",
      "7": "IND",
      "8": "@HOU",
      "9": "@KC",
      "10": "DEN",
      "11": "@GB",
      "12": "CIN",
      "13": "@PHI",
      "14": "JAX",
      "15": "@LAC",
      "16": "HOU",
      "17": "DAL",
      "18": "@JAX",
      "TEAM": "TEN"
    },
    {
      "1": "JAX",
      "2": "@DET",
      "3": "PHI",
      "4": "@DAL",
      "5": "TEN",
      "6": "@CHI",
      "7": "GB",
      "8": "@IND",
      "9": "MIN",
      "10": "@PHI",
      "11": "@HOU",
      "12": "ATL",
      "13": "@NYG",
      "14": "BYE",
      "15": "NYG",
      "16": "@SF",
      "17": "CLE",
      "18": "DAL",
      "TEAM": "WSH"
    }
]
const colorJSON = {
    "ARI": "rgba(151, 35, 63, 0.5)",
    'ATL': "rgba(167, 25, 48, 0.5)",
    'BAL': "rgba(26, 25, 95, 0.5)",
    'BUF': "rgba(0, 51, 141, 0.5)",
    'CAR': "rgba(0, 133, 202, 0.5)",
    'CHI': "rgba(11, 22, 42, 0.5)",
    'CLE': "rgba(49, 29, 0, 0.5)",
    'DAL': "rgba(0, 53, 148, 0.5)",
    'DEN': "rgba(251, 79, 20, 0.5)",
    'DET': "rgba(0, 118, 182, 0.5)",
    'GB': "rgba(24, 48, 40, 0.5)",
    'HOU': "rgba(3, 32, 47, 0.5)",
    'KC': "rgba(227, 24, 55, 0.5)",
    'MIA': "rgba(0, 142, 151, 0.5)",
    'NO': "rgba(211, 188, 141, 0.5)",
    'TEN': "rgba(12, 35, 64, 0.5)",
    'PHI': "rgba(0, 76, 84, 0.5)",
    'TB': "rgba(213, 10, 10, 0.5)",
    'CIN': "rgba(251, 79, 20, 0.5)",
    'PIT': "rgba(255, 182, 18, 0.5)",
    'SF': "rgba(170, 0, 0, 0.5)",
    'MIN': "rgba(79, 38, 131, 0.5)",
    'LAC': "rgba(0, 128, 198, 0.5)",
    'LAR': "rgba(0, 53, 148, 0.5)",
    'IND': "rgba(0, 44, 95, 0.5)",
    'NE': "rgba(0, 34, 68, 0.5)",
    'NYG': "rgba( 1, 35, 82, 0.5)",
    'JAX': "rgba(215, 162, 42, 0.5)",
    'LV': "rgba(165, 172, 175, 0.5)",
    'NYJ': "rgba(18, 87, 64, 0.5)",
    'SEA': "rgba(0, 34, 68, 0.5)",
    'WSH': "rgba(90, 20, 20, 0.5)"
}
const teamJSON = {
  "ARI": "Cardinals",
  'ATL': "Falcons",
  'BAL': "Ravens",
  'BUF': "Bills",
  'CAR': "Panthers",
  'CHI': "Bears",
  'CLE': "Browns",
  'DAL': "Cowboys",
  'DEN': "Broncos",
  'DET': "Lions",
  'GB': "Packers",
  'HOU': "Texans",
  'KC': "Chiefs",
  'MIA': "Dolphins",
  'NO': "Saints",
  'TEN': "Titans",
  'PHI': "Eagles",
  'TB': "Buccaneers",
  'CIN': "Bengals",
  'PIT': "Steelers",
  'SF': "49ers",
  'MIN': "Vikings",
  'LAC': "Chargers",
  'LAR': "Rams",
  'IND': "Colts",
  'NE': "Patriots",
  'NYG': "Giants",
  'JAX': "Jaguars",
  'LV': "Raiders",
  'NYJ': "Jets",
  'SEA': "Seahawks",
  'WSH': "Commanders"
}
console.log(group)
get(ref(database, `groups/${group}/`)).then((info) => {
    if ((info.exists())){
        name1 = info.val()["name1"]
        name2 = info.val()["name2"]

        if (week%2 == 0){
            let temp = name1
            name1 = name2
            name2 = temp
        }
        currTurn.textContent = name1
    }
      
      
    }).catch((error) => {
      console.error(error);
  });
let slate = httpGet("https://api.sleeper.app/v1/state/nfl")
let slateJSON = JSON.parse(slate)
let week = slateJSON["leg"]
let team1Arr = []
let team2Arr = []
get(ref(database, `data/${group}/${week}`)).then((info) => {
    if (!(info.exists())){
        for (let i of scheduleJSON){
            let cleanTeam1 = i["TEAM"].replace('@', '');
            let cleanTeam2 = i[week].replace('@', '');
        
            if (team1Arr.includes(cleanTeam1) || team2Arr.includes(cleanTeam1)){
                continue
            }
            team1Arr.push(cleanTeam1)
            team2Arr.push(cleanTeam2)
        
        }
        let count = 0
        
        let playerOneTurn = true
        let playerOnePicks = []
        let playerTwoPicks = []
        
        const currTurn = document.getElementById("currTurn")
        
        const team1Name = document.getElementById("team1Name")
        const team2Name = document.getElementById("team2Name")
        
        const team1 = document.getElementById("team1")
        const team2 = document.getElementById("team2")
        
        
        team1Name.textContent = teamJSON[team1Arr[count]]
        team1.setAttribute("style", `background-color: ${colorJSON[team1Arr[count]]}`)
        team2Name.textContent = teamJSON[team2Arr[count]]
        team2.setAttribute("style", `background-color: ${colorJSON[team2Arr[count]]}`)
        team1.addEventListener("click", function(){
            if (playerOneTurn == true){
                playerOnePicks.push(team1Name.textContent)
                playerTwoPicks.push(team2Name.textContent)
                currTurn.textContent = name2
        
            }
            else {
                playerOnePicks.push(team2Name.textContent)
                playerTwoPicks.push(team1Name.textContent)
                currTurn.textContent = name1
        
            }
            playerOneTurn = !(playerOneTurn)
            count++
            if (count == 16){
                const choose = document.getElementById("choose")
                const doneChoose = document.getElementById("doneChoose")
                choose.setAttribute("style", "display: none;")
                doneChoose.setAttribute("style", "display: block;")
                console.log(playerOnePicks, playerTwoPicks)
                if (week % 2 == 0){
                    let temp = playerOnePicks 
                    playerTwoPicks = playerOnePicks
                    playerOnePicks = temp
                }
                set(ref(database, "data/" + group + "/" + week), {
                    playerOnePicks: playerOnePicks,
                    playerTwoPicks: playerTwoPicks
                    
                    
                })
            }
            team1Name.textContent = teamJSON[team1Arr[count]]
            team1.setAttribute("style", `background-color: ${colorJSON[team1Arr[count]]}`)
            team2Name.textContent = teamJSON[team2Arr[count]]
            team2.setAttribute("style", `background-color: ${colorJSON[team2Arr[count]]}`)
        
        }) 
        team2.addEventListener("click", function(){
            if (playerOneTurn == true){
                playerOnePicks.push(team2Name.textContent)
                playerTwoPicks.push(team1Name.textContent)
                currTurn.textContent = name2
        
        
            }
            else {
                playerOnePicks.push(team1Name.textContent)
                playerTwoPicks.push(team2Name.textContent)
                currTurn.textContent = name1
        
            }
            playerOneTurn = !(playerOneTurn)
            count++
            if (count == 16){
                const choose = document.getElementById("choose")
                const doneChoose = document.getElementById("doneChoose")
                choose.setAttribute("style", "display: none;")
                doneChoose.setAttribute("style", "display: block;")
                if (week % 2 == 0){
                    let temp = playerOnePicks 
                    playerTwoPicks = playerOnePicks
                    playerOnePicks = temp
                }
                set(ref(database, "data/" + group + "/" + week), {
                    playerOnePicks: playerOnePicks,
                    playerTwoPicks: playerTwoPicks
                    
                    
                })
                console.log(playerOnePicks, playerTwoPicks)
        
            }
            team1Name.textContent = teamJSON[team1Arr[count]]
            team1.setAttribute("style", `background-color: ${colorJSON[team1Arr[count]]}`)
            team2Name.textContent = teamJSON[team2Arr[count]]
            team2.setAttribute("style", `background-color: ${colorJSON[team2Arr[count]]}`)
        
        })
    }
    else {
      const d = new Date();
      let day = d.getDay();
      day = 1
      if (day != 2){
          const choose = document.getElementById("choose")
          const doneChoose = document.getElementById("doneChoose")
          choose.setAttribute("style", "display: none;")
          doneChoose.setAttribute("style", "display: block;")
      }
      else {
        const choose = document.getElementById("choose")
        choose.setAttribute("style", "display: none;")
        const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '166911f3b9msh094793efec2dab1p1da39fjsn7a618c24371c',
              'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com'
          }
          };
          
          fetch('https://nfl-schedule.p.rapidapi.com/v1/schedules', options)
            .then(response => response.json())
            .then(response => {
                  console.log(response)
                  let matchups = response["data"]
                  for (let i of matchups){
                      console.log(i["awayTeam"]["name"])
                      console.log(i["homeTeam"]["name"])
                      if ("score" in i["awayTeam"]){
                          console.log(i["awayTeam"]["score"])
                          console.log(i["homeTeam"]["score"])            
                      }
          
                  }
              })
            .catch(err => console.error(err));
      }
    }
      
      
    }).catch((error) => {
      console.error(error);
  });








