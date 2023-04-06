---@diagnostic disable: duplicate-set-field
local ESX = exports['es_extended']:getSharedObject()

Framework = {}

function Framework.Notify(src, msg, type, duration)
    TriggerClientEvent('esx:showNotification', src, msg, type, duration)
end

function Framework.GetPlayer(src)
    return ESX.GetPlayerFromId(src)
end

-- Inventory functions

function Framework.GetValidInv(src)
    local xPlayer = Framework.GetPlayer(src)
    if not xPlayer then return end
    return xPlayer.getInventory(true)
end

function Framework.AddItem(src, name, amount)
    local xPlayer = Framework.GetPlayer(src)
    return xPlayer.addInventoryItem(name, amount)
end

function Framework.RemoveItem(src, name, amount)
    local xPlayer = Framework.GetPlayer(src)
    return xPlayer.removeInventoryItem(name, amount)
end
