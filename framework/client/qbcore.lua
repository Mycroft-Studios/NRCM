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

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    createCraftingZones()
end)

if GetResourceState('ox_target') == 'started' then
    Framework.target.sphere = function(data)
        return exports['ox_target']:addSphereZone(data)
    end

    Framework.target.remove = function(zoneId)
        return exports['ox_target']:removeZone(zoneId)
    end
elseif GetResourceState('qb-target') == 'started' then
    Framework.target.sphere = function(data)
        local options = {}
        for _, optionData in ipairs(data.options) do
            options[#options + 1] = {
                icon = optionData.icon,
                label = optionData.label,
                action = optionData.onSelect,
                canInteract = optionData.canInteract,
                job = data.groups,
                gang = data.groups,
            }
        end
        exports['qb-target']:AddCircleZone(data.name, data.coords, data.radius, {
            name = data.name,
            debugPoly = data.debug,
        }, { options = options })
        return data.name
    end

    Framework.target.remove = function(zoneId)
        return exports['qb-target']:RemoveZone(zoneId)
    end
end
