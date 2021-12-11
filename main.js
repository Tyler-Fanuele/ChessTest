// JavaScript code goes here
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvas_width = canvas.width;
var canvas_height = canvas.height;
var width = canvas_width / 8;
var height = canvas_height / 8;

var num_of_colors = 5;

var bright_square_color;
var dark_square_color;

var bright_piece_color;
var dark_piece_color;

var color_counter = 0;

function update_color()
{
    switch(color_counter)
    {
    case 0:
        bright_square_color = "#F4A460";
        dark_square_color = "#8B4513";
        bright_piece_color = "#FFFFFF";
        dark_piece_color = "#000000";
        break;
    case 1:
        bright_square_color = "#FFFFFF";
        dark_square_color = "#000000";
        bright_piece_color = "#F4A460";
        dark_piece_color = "#8B4513";
        break;
    case 2:
        bright_square_color = "#FFFFFF";
        dark_square_color = "#008080";
        bright_piece_color = "#FFFFFF";
        dark_piece_color = "#000000";
        break;
    case 3:
        bright_square_color = "#dcdcdc";
        dark_square_color = "#8c9e5e";
        bright_piece_color = "#FFFFFF";
        dark_piece_color = "#000000";
        break;
    case 4:
        bright_square_color = "#c0c0c0";
        dark_square_color = "#545aa7";
        bright_piece_color = "#FFFFFF";
        dark_piece_color = "#000000";
        break;
    }
}

function change_color()
{
    color_counter = ( color_counter + 1 ) % num_of_colors;
}

function draw_board()
{
    for(let i = 0; i < width; i++)
    {
        for(let j = 0; j < height; j++)
        {
            if(j % 2)
            {
                ctx.beginPath();
                ctx.rect(j * height, 
                        i * width, 
                        height, 
                        width);

                (i % 2) ? ctx.fillStyle = bright_square_color : ctx.fillStyle = dark_square_color;
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.rect(j * height, 
                        i * width, 
                        height, 
                        width);

                ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                ctx.stroke();
                ctx.closePath();
            }
            else
            {
                ctx.beginPath();//comment 
                ctx.rect(j * height, 
                        i * width, 
                        height, 
                        width);

                (i % 2) ? ctx.fillStyle = dark_square_color : ctx.fillStyle = bright_square_color;
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.rect(j * height, 
                        i * width, 
                        height, 
                        width);
                        
                ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    ctx.beginPath();
    ctx.rect(0, 0, canvas_height, canvas_width);
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
}

function draw_peices()
{
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 3, 0, Math.PI*2, false);
    ctx.fillStyle = dark_piece_color;
    ctx.fill();
    ctx.closePath(); 
}

function draw()
{
    update_color();
    draw_board();
    draw_peices();
}

setInterval(draw, 10);


