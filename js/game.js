/*
**************GOALKEEPER****************
  -------------------------------------
  |  topleft   |  top   |  topright   |
  --------------------------
  |    left    | center |   right     |
  --------------------------
  | bottomleft | bottom | bottomright |
  --------------------------------------
*/

const sectors = [
    'topleft',
    'top',
    'topright',
    'left',
    'center',
    'right',
    'bottomleft',
    'bottom',
    'bottomright',
];

const goalKeeper = {
    defendSector: null,
    savesToWin: 2,
    saves: 0,
    init() {
        console.log('HERE');
        historyObject.add('HERE');
        const sectorNum = Math.trunc(Math.random() * 9);
        this.defendSector = sectors[sectorNum];
        console.log(this.defendSector);
        historyObject.add(this.defendSector);
    },
    checkWin() {
        if (this.saves === this.savesToWin) {
            console.log('Goalkeeper wins!!!');
            historyObject.add('Goalkeeper wins!!!');
            return true;
        }
        console.log('Goalkeeper need ' + (this.savesToWin - this.saves) + ' more saves');
        return false;
    },
};


const historyObject = {
    step:[],
    count:1,
    arrayStep:[],
    getStep(n){
      if(this.step[n]){
          for (var key in this.step[n]) {
              console.log( this.step[n][key]);
          }
      }else{console.log('Запрошенного вами хода не существует!!')}
    },
    add(h){
        this.arrayStep.push(h);
    },
    nextStep(){
        this.step[this.count] =  this.arrayStep;
        this.arrayStep = [];
        ++this.count;
    }
};


/* eslint no-param-reassign: 0 */
const attacker = {
    sectorToAttack: null,
    goals: 0,
    goalsToWin: 10,
    init(sector) {
        if (sectors.indexOf(sector) >= 0) {
            this.sectorToAttack = sector;
            return true;
        }
        return false;
    },
    attack(keeper) {
        console.log(keeper.defendSector, this.sectorToAttack);
        historyObject.add(this.sectorToAttack + " " + this.sectorToAttack);
        if (keeper.defendSector === this.sectorToAttack) {
            console.log('SAVE!!!');
            historyObject.add('SAVE!!!');
            keeper.saves++;
            return false;
        }
        console.log('GOAL!!!');
        historyObject.add('GOAL!!!');
        this.goals++;
        return true;
    },
    checkWin() {
        if (this.goals === this.goalsToWin) {
            console.log('Attacker wins!!!');
            historyObject.add('Attacker wins!!!');
            return true;
        }
        console.log('Attacker need ' + (this.goalsToWin - this.goals) + ' more goals');
        return false;
    },
};

let keeperWins = false;
let attackerWins = false;

do {

    let currentAttacksector;

    do {
        currentAttacksector = prompt('Choose sector to attack ( ' + sectors.join(', ') + ' )'+'. To watch your step use command "step n", where "n" is your step number');
        if('step' == currentAttacksector.split(' ')[0]){
            var int = currentAttacksector.split(' ')[1];
            if(!!int && !isNaN(int)){
                historyObject.getStep(int);
            }
        }
    } while (!attacker.init(currentAttacksector));

    goalKeeper.init();
    attacker.attack(goalKeeper);

    keeperWins = goalKeeper.checkWin();
    attackerWins = attacker.checkWin();
    historyObject.nextStep();
} while (!keeperWins && !attackerWins);
