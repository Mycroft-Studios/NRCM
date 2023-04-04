---@diagnostic disable: duplicate-set-field

Framework = {}

local QBCore = exports['qb-core']:GetCoreObject()

function Framework.Notify(src, msg, type, duration)
    TriggerClientEvent('QBCore:Notify', src, msg, type, duration)
end

function Framework.GetPlayer(src)
    return QBCore.Functions.GetPlayer(src)
end

function Framework.GetValidInv(src)
    local xPlayer = Framework.GetPlayer(src)
    if not xPlayer then return end
    local inventory = {}
    for _, item in pairs(xPlayer.PlayerData.items) do
        inventory[item.name] = inventory[item.name] or 0
        if QBCore.Shared.isItemIntact(item) then
            inventory[item.name] = inventory[item.name] + item.amount
        end
    end
    return inventory
end

function Framework.AddItem(src, name, amount)
    local xPlayer = Framework.GetPlayer(src)
    return xPlayer.Functions.AddItem(name, amount)
end

function Framework.RemoveItem(src, name, amount)
    local xPlayer = Framework.GetPlayer(src)
    return xPlayer.Functions.RemoveItem(name, amount)
end
