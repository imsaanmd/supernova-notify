notify = {}

RegisterNetEvent("supernova.notify")
AddEventHandler("supernova.notify", function(type, message)
    local src = source 
    TriggerClientEvent("notify", src, type, message)
end)
