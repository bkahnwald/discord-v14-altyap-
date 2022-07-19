const { EmbedBuilder } = require("discord.js");

exports.embed = async (description,  color = "#ffffff", title = null) => {

    // Eğer Renk Belirtilmez Temel Renk Beyaz Baz Alınır
    
    if (color == "RED") color = "#ff0000"
    else if (color == "YELLOW") color = "#ffff00"
    else if (color == "GREEN") color = "#10ff00"
    else if (color == "BLUE") color = "#000cff"
    else if (color == "PURPLE") color = "#a900ff"
    else if (color == "BLACK") color = "#000001"
    else if (color == "WHITE") color = "#ffffff"

    const response = new EmbedBuilder()
    .setDescription(description)
    .setColor(color)
    .setTitle(title)

    return response;

}
