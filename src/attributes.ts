export type AttributeKeys = {
    "generic.armor",
    "generic.armor_toughness",
    "generic.attack_damage",
    "generic.attack_knockback",
    "generic.attack_speed",
    "player.block_break_speed",
    "player.block_interaction_range",
    "player.entity_interaction_range",
    "generic.fall_damage_multiplier",
    "generic.flying_speed",
    "generic.follow_range",
    "generic.gravity",
    "generic.jump_strength",
    "generic.knockback_resistance",
    "generic.luck",
    "generic.max_absorption",
    "generic.max_health",
    "generic.movement_speed",
    "generic.safe_fall_distance",
    "generic.scale",
    "zombie.spawn_reinforcements",
    "generic.step_height"
}

export const calculateAttribute = (attribute: { value: number, modifiers: { uuid: string, value: number, operation: number }[] }) => {
    return attribute.value
}
