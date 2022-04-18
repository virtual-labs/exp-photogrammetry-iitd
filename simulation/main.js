function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2      

}



function navNext2()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        document.getElementById("arrowcube1").style.visibility="visible";

}



function navNext3()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";

        //Month Print
//document.getElementById("demo01").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo02").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo03").innerHTML = logo.getFullYear();

        //document.getElementById("cubedatehidden1").style.visibility="visible";

}
 
function navNext4()
{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";

        //Month Print
//document.getElementById("demo01").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo02").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo03").innerHTML = logo.getFullYear();

        //document.getElementById("cubedatehidden1").style.visibility="visible";

}

function navNext5()
{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";


}

function navNext6()
{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";
        
        document.getElementById("arrow_note_dwld").style.visibility="visible";
        document.getElementById("arrow_note_dwld2").style.visibility="visible";

        setTimeout(function()
            { 
                document.getElementById("arrowrestart").style.visibility="visible";
                document.getElementById("resetbutton").style.visibility="visible";
                document.getElementById("thanku").style.visibility="visible";
            },2000);
        
}

function reset()
{
    location.reload();
}



function L_piller1()
{
    document.getElementById("leftpiller1").style.visibility="visible";
    document.getElementById("leftpiller1").style.animation="addpiler11 2s forwards";
    document.getElementById("addl1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";

    setTimeout(function()
    { 
        document.getElementById("leftpiller1").style.visibility="hidden";
        document.getElementById("leftpiller2").style.visibility="visible";

        document.getElementById("addr1").style.visibility="visible";
        document.getElementById("step2a").style.visibility="hidden";
        document.getElementById("step2b").style.visibility="visible";
        document.getElementById("arrowbeam1").style.visibility="visible";
        // document.getElementById("step2e").style.visibility="visible";

    },2000);
}

function R_piller2()
{
    document.getElementById("rightpiller1").style.visibility="visible";
    document.getElementById("rightpiller1").style.animation="addpiler21 2s forwards";
    document.getElementById("addr1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";

    setTimeout(function()
    { 
        document.getElementById("rightpiller1").style.visibility="hidden";
        document.getElementById("rightpiller2").style.visibility="visible";
        
        document.getElementById("addrod1").style.visibility="visible";
        document.getElementById("step2b").style.visibility="hidden";
        document.getElementById("step2c").style.visibility="visible";
        document.getElementById("arrowbeam1").style.visibility="visible";
        // document.getElementById("step2d").style.visibility="hidden";
        // document.getElementById("step2e").style.visibility="visible";


    },2000);
}

function add_beam1()
{
    document.getElementById("beampiller1").style.visibility="visible";
    document.getElementById("beampiller1").style.animation="beamonpiller1 2s forwards";
    document.getElementById("addrod1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";

    setTimeout(function()
    { 
        document.getElementById("beampiller1").style.visibility="hidden";
        document.getElementById("beampiller2").style.visibility="visible";
        
        // document.getElementById("addplate1").style.visibility="visible";

        document.getElementById("step2c").style.visibility="hidden";
        document.getElementById("step2e").style.visibility="visible";
        document.getElementById("arrowbeam1").style.visibility="visible";
        document.getElementById("addmarker1").style.visibility="visible";
        // document.getElementById("step2d").style.visibility="hidden";
        // document.getElementById("step2e").style.visibility="visible";


    },2000);
}

function add_plate1()
{
    document.getElementById("platepiller1").style.visibility="visible";
    document.getElementById("platepiller1").style.animation="plateonpiller1 2s forwards";
    document.getElementById("addplate1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";
    
    setTimeout(function()
    { 
        document.getElementById("platepiller1").style.visibility="hidden";
        document.getElementById("platepiller2").style.visibility="visible";
        
        document.getElementById("addmarker1").style.visibility="visible";

        document.getElementById("step2d").style.visibility="hidden";
        document.getElementById("step2e").style.visibility="visible";
        document.getElementById("arrowbeam1").style.visibility="visible";
        // document.getElementById("step2d").style.visibility="hidden";
        // document.getElementById("step2e").style.visibility="visible";


    },2000);
}


function add_marker1()
{
    document.getElementById("point_mark1").style.visibility="visible";
    document.getElementById("point_mark1").style.animation="usemarker_a 2s forwards";
    document.getElementById("addmarker1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";

    setTimeout(function()
    { 
        // document.getElementById("platepiller1").style.visibility="hidden";
        document.getElementById("point_m1").style.visibility="visible";
        document.getElementById("a_m1").style.visibility="visible";

        document.getElementById("point_mark1").style.animation="usemarker_b 2s forwards";
        
        setTimeout(function()
        { 
            document.getElementById("point_m2").style.visibility="visible";
            document.getElementById("b_m1").style.visibility="visible";

            

            document.getElementById("point_mark1").style.animation="usemarker_c 2s forwards";
            setTimeout(function()
            {
                document.getElementById("point_m3").style.visibility="visible";
                document.getElementById("c_m1").style.visibility="visible";

                document.getElementById("point_mark1").style.visibility="hidden";
                setTimeout(function()
                            {
                                document.getElementById("100_mark1").style.visibility="visible";
                                document.getElementById("861_mark1").style.visibility="visible";
                                document.getElementById("1530_mark1").style.visibility="visible";
                                document.getElementById("100_m1").style.visibility="visible";
                                document.getElementById("861_m1").style.visibility="visible";
                                document.getElementById("1530_m1").style.visibility="visible";  
                                document.getElementById("take_ss1").style.visibility="visible";


        document.getElementById("step2e").style.visibility="hidden";
        document.getElementById("step2f").style.visibility="visible";
        document.getElementById("arrowbeam1").style.visibility="visible"; 
                            },2000);    
            },2000);    
        },2000);
    // document.getElementById("addplate1").style.visibility="visible";
        // document.getElementById("step2d").style.visibility="hidden";
        // document.getElementById("step2e").style.visibility="visible";


    },2000);
}

function takess1()
{
    document.getElementById("take_ss1").style.visibility="hidden";
    document.getElementById("arrowbeam1").style.visibility="hidden";
    document.getElementById("ss1").style.visibility="visible";
    document.getElementById("ss1").style.animation="ss_eff 1s forwards";
    setTimeout(function()
        {
         var x = document.getElementById("step1");
            x.play();
        },100);

    setTimeout(function()
            {
                document.getElementById("step2f").style.visibility="hidden";
                document.getElementById("step2g").style.visibility="visible";
                document.getElementById("arrowbeam1").style.visibility="visible";
               document.getElementById("nextButton3").style.visibility="visible"; 
            },2000);
}


function addscale2()
{
    document.getElementById("addscalebtn2").style.visibility="hidden";
    // document.getElementById("scale2").style.visibility="visible";
    // document.getElementById("scale2").style.animation="scale_move1 1.5s forwards";
    document.getElementById("arrowbeam4").style.visibility="hidden";

    setTimeout(function()
            {
                // document.getElementById("bscale2").style.visibility="visible";
                document.getElementById("b_value2").style.visibility="visible"; 
            },1000);
    // setTimeout(function()
    //         {
                // document.getElementById("bscale2").style.visibility="hidden";
                // document.getElementById("scale2").style.animation="scale_move2 1.5s forwards"; 
                document.getElementById("scale2").src="images/scale2.png";

                setTimeout(function()
                    {
                        document.getElementById("cal3").style.visibility="visible";
                        document.getElementById("cal4").style.visibility="visible";
                        // document.getElementById("cscale2").style.visibility="visible"; 
                    },2000);
            // },3000);
    setTimeout(function()
            {
                document.getElementById("arrowcan5").style.visibility="visible";
                document.getElementById("nextButtoncan5").style.visibility="visible";
                document.getElementById("step5a").style.visibility="hidden";
                document.getElementById("step5b").style.visibility="visible";
                // document.getElementById("arrowbeam1").style.visibility="visible";
            },3000);
}


function addscale1()
{
    document.getElementById("addscalebtn1").style.visibility="hidden";
    document.getElementById("arrowbeam2").style.visibility="hidden";
    // document.getElementById("scale1").style.visibility="visible";
    // document.getElementById("scale1").style.animation="scale_move1 1.5s forwards";
    setTimeout(function()
            {
                // document.getElementById("bscale1").style.visibility="visible";
                document.getElementById("b_value").style.visibility="visible"; 
            },1000);
    
                // document.getElementById("bscale1").style.visibility="hidden";
                // document.getElementById("scale1").style.animation="scale_move2 1.5s forwards"; 
                // document.getElementById("scale1").src="images/scale2.png";

                setTimeout(function()
                    {
                        document.getElementById("cal1").style.visibility="visible";
                        document.getElementById("cal2").style.visibility="visible";
                        // document.getElementById("cscale1").style.visibility="visible"; 
                    },2000);
            
    setTimeout(function()
            {
                document.getElementById("step3a").style.visibility="hidden";
                document.getElementById("step3b").style.visibility="visible";
                // document.getElementById("arrowbeam1").style.visibility="visible";
                document.getElementById("arrowcan3").style.visibility="visible";
                document.getElementById("nextButtoncan3").style.visibility="visible";
            },3000);
}



function addweight1()
{
    document.getElementById("new_weight1").style.visibility="visible";
    document.getElementById("addweight111").style.visibility="hidden";
    document.getElementById("new_weight1").style.animation="addweight11 1s forwards";
    document.getElementById("arrowbeam3").style.visibility="hidden";
    setTimeout(function()
            {
                document.getElementById("new_weight1").style.visibility="hidden";
                document.getElementById("new_weight2").style.visibility="visible";
                document.getElementById("new_weighttb1").style.visibility="visible";

                document.getElementById("step4a").style.visibility="hidden";
                document.getElementById("step4b").style.visibility="visible";
                document.getElementById("arrowweight1").style.visibility="visible";
            },1000);
}

function moveweight()
{

    document.getElementById("new_weight2").style.visibility="hidden";
    document.getElementById("new_weight1").style.visibility="visible";
    document.getElementById("arrowweight1").style.visibility="hidden";
    document.getElementById("new_weight1").style.animation="moveweight11 2s forwards";
    
    setTimeout(function()
            {
                document.getElementById("new_weight1").style.visibility="hidden";
                document.getElementById("new_weight3").style.visibility="visible";


                
                // document.getElementById("platepiller3").style.animation="movedown1 1.2s forwards";
                document.getElementById("new_weight3").style.animation="movedown2 1.2s forwards";
                document.getElementById("c_mx1").style.animation="movedownplus2 1.2s forwards";
                document.getElementById("point_mx3").style.animation="movedowncc2 1.2s forwards";
                document.getElementById("beampiller3").src="images/11.png";
                
                setTimeout(function()
            	{
				document.getElementById("1544_mark1").style.visibility="visible";
				document.getElementById("1544_m1").style.visibility="visible";
				},1600);

                document.getElementById("take_ss2").style.visibility="visible";
                document.getElementById("arrowbeam3").style.visibility="visible";
                document.getElementById("step4b").style.visibility="hidden";
                document.getElementById("step4c").style.visibility="visible";

                // document.getElementById("new_weighttb1").style.visibility="visible";
            },2000);
}

function takess2()
{
    document.getElementById("arrowbeam3").style.visibility="hidden";
    document.getElementById("take_ss2").style.visibility="hidden";
    document.getElementById("ss2").style.visibility="visible";
    document.getElementById("ss2").style.animation="ss_eff 1s forwards";
    setTimeout(function()
        {
         var x = document.getElementById("step1");
            x.play();
        },100);

    setTimeout(function()
            {
               document.getElementById("nextButton4").style.visibility="visible";
               document.getElementById("arrowbeam3").style.visibility="visible";
                document.getElementById("step4c").style.visibility="hidden";
                document.getElementById("step4d").style.visibility="visible"; 
            },2000);
}



