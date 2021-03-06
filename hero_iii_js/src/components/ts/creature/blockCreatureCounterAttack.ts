import Creature from './creature';
export default class BlockCreatureCounterAttack extends Creature {
    decoratedCreature: Creature;
    constructor(_creature: Creature) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());

        this.decoratedCreature = _creature;
    }
    attack(_defender: Creature) {
        if (this.decoratedCreature.isAlive()) {
            let damageToDeal = this.decoratedCreature.calculateDamge(this, _defender);

            _defender.applayDamage(damageToDeal);
            this.decoratedCreature.performAfterAttack(damageToDeal);
        }
    }
    calculateDamge(_attacker: Creature, _defender: Creature) {
        return this.getCalculator().calculate(_attacker, _defender);
    }
}
