local function updateCraftingLocation(name, data)
    Config.CraftingLocations[name] = data
    TriggerClientEvent("nr-craftingmenu:client:updateCraftingLocations", -1, name, data)
end

exports('updateCraftingLocation', updateCraftingLocation)

local function CanCraft(src, item, location)
    local materials
    local index = 0
    for i = 1, #Config.CraftingLocations[location].items do
        local _item = Config.CraftingLocations[location].items[i]
        if _item.name == item then
            materials = _item.requiredItems
            index = i
            break
        end
    end
    if not materials then return false end
    for k = 1, #materials do
        local itemData = materials[k]
        local inv = Framework.GetValidInv(src)
        if not inv or not next(inv) then return false end
        if not inv[itemData.name] or inv[itemData.name] < itemData.amount then
            Framework.Notify(src, "You do not have enough " .. itemData.label, "error")
            return false
        end
    end
    return index
end

local function GetItem(src, name, amount, itemData)
    if not Framework.AddItem(src, name, amount) then
        Framework.Notify(src, "You don't have enough space in your inventory", "error")
        TriggerClientEvent('nr-craftingmenu:client:cancelEmote', src)
        return
    end

    for k2 = 1, #itemData.requiredItems do
        local item = itemData.requiredItems[k2]
        if not Framework.RemoveItem(src, item.name, item.amount * amount) then
            -- multiple stacks of the same item
            for _ = 0, item.amount * amount do
                if not Framework.RemoveItem(src, item.name, 1) then
                    TriggerClientEvent('nr-craftingmenu:client:cancelEmote', src)
                    Framework.Notify(src, "You can't use expired ingredients")
                end
            end
        end
    end
end

RegisterNetEvent('nr-craftingmenu:server:craftItems', function(items, location)
    local src = source
    local xPlayer = Framework.GetPlayer(src)
    if not xPlayer then return end
    local locationData = Config.CraftingLocations[location]
    if not locationData then
        return false
    end
    if #(GetEntityCoords(GetPlayerPed(src)) - locationData.location) > 5.0 then
        return false
    end
    for _, item in ipairs(items) do
        for _ = 1, item.amount do
            local itemName = item.name
            local index = CanCraft(src, itemName, location)
            if not index then return end
            local itemData = locationData.items[index]
            if not lib.callback.await('nr-craftingmenu:client:progressbar', src, {
                    label = itemData.label,
                    time = itemData.time or 5000
                }, location) then
                TriggerClientEvent('nr-craftingmenu:client:cancelEmote', src)
                return false
            end
            GetItem(src, itemName, 1, itemData)
        end
    end
    TriggerClientEvent('nr-craftingmenu:client:cancelEmote', src)
end)

lib.callback.register('nr-craftingmenu:server:getPlayerInventory', function()
    local src = source
    return Framework.GetValidInv(src)
end)

CreateThread(function()
    if not Framework then
        error("\n^1Framework not found")
    end
end)
