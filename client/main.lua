notify = {}

function notify:Create(type, message)
    SendNUIMessage({
        action = "notify",
        notificationType = type,
        message = message 
    })
    print(type, message)
end

RegisterNetEvent("supernova.notify")
AddEventHandler("supernova.notify", function(type, message)
    notify:Create(type, message)
end)

RegisterNetEvent("notify")
AddEventHandler("notify", function(type, message)
    notify:Create(type, message)
end)
