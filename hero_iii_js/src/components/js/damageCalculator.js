"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Creature from './creature'; 
class DamageCalculator {
    calculate(_attacker, _defender) {
        let randValue = Math.floor(Math.random() * (_attacker.getDamage().getUpperPoint() - _attacker.getDamage().getLowerPoint() + 1) + _attacker.getDamage().getLowerPoint());
        let oneCreatureToDeal;
        if (_attacker.getAttack() >= _defender.getArmor()) {
            let attackPoints = _attacker.getAttack() - _defender.getArmor();
            if (attackPoints > 60) {
                attackPoints = 60;
            }
            oneCreatureToDeal = randValue * (1 + (attackPoints) * 0.05);
        }
        else {
            let defencePoint = _defender.getArmor() - _attacker.getAttack();
            if (defencePoint > 12) {
                defencePoint = 12;
            }
            oneCreatureToDeal = randValue * (1 - defencePoint * 0.025);
        }
        if (oneCreatureToDeal < 0) {
            oneCreatureToDeal = 0;
        }
        // let wholeStackDamageToDeal = Math.floor(_attacker.getAmount() * oneCreatureToDeal);
        // let wholeStackDamageToDealAfterChange = this.changeDamageAfter(wholeStackDamageToDeal, _attacker)
        return Math.round(oneCreatureToDeal);
    }
}
exports.default = DamageCalculator;
