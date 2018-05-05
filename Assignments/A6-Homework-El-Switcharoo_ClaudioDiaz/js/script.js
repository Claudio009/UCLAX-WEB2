var mission1 = 'off';

function mission1_click()
{
    console.log(mission1);

    if(mission1 == 'off')
    {
        mission1 = 'on';
        $('div.set1 img.rocket1').animate({'top':'290px'});
    }
    else if (mission1 == 'on')
    {
        mission1 = 'off';
        $('div.set1 img.rocket1').animate({'top':'0px'});
    }
}
$('div.set1 button.on_button_1').click(mission1_click);

//Switch2

var mission2 = 'off';

function mission2_click()
{
    console.log(mission2);

    if(mission2 == 'off')
    {
        mission2 = 'on';
        $('div.set2 img.rocket2').animate({'top':'290px'});
    }
    else if (mission2 == 'on')
    {
        mission2 = 'off';
        $('div.set2 img.rocket2').animate({'top':'0px'});
    }
}
$('div.set2 button.on_button_2').click(mission2_click);

//Switch3

var mission3 = 'off';

function mission3_click()
{
    console.log(mission3);

    if(mission3 == 'off')
    {
        mission3 = 'on';
        $('div.set3 img.rocket3').animate({'top':'290px'});
    }
    else if (mission3 == 'on')
    {
        mission3 = 'off';
        $('div.set3 img.rocket3').animate({'top':'0px'});
    }
}
$('div.set3 button.on_button_3').click(mission3_click);
