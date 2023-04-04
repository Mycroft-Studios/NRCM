---@diagnostic disable: duplicate-set-field
Framework = {
    target = {}
}

function Framework.PlayEmote(emote)
    return exports.scully_emotemenu:PlayByCommand(emote)
end

function Framework.CancelEmote()
    return exports.scully_emotemenu:CancelAnimation()
end

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    createCraftingZones()
end)

Framework.target.sphere = function (data)
    return exports['ox_target']:addSphereZone(data)
end

Framework.target.remove = function (zoneId)
    return exports['ox_target']:removeZone(zoneId)
end
