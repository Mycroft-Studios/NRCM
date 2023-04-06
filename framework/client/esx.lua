---@diagnostic disable: duplicate-set-field
Framework = {
    target = {}
}

function Framework.PlayEmote(emote)
    TriggerEvent('animations:client:EmoteCommandStart', emote)
end

function Framework.CancelEmote()
    TriggerEvent('animations:client:EmoteCommandStart', 'c')
end

RegisterNetEvent('esx:playerLoaded', function()
    createCraftingZones()
end)

if GetResourceState('ox_target') == 'started' then
    Framework.target.sphere = function(data)
        return exports['ox_target']:addSphereZone(data)
    end

    Framework.target.remove = function(zoneId)
        return exports['ox_target']:removeZone(zoneId)
    end
end
