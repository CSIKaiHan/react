import React, { Component } from 'react';
import Button from './Button';

class D3Map extends Component{

    constructor(props){
		super(props);
		this.state = {
            selectedColor: "",
            logo:"",
            name:""
        }
    }


    componentWillMount(){
        console.log("SVG loaded ");
    }


    onClickbgOrange(){
        this.setState(
            {
                name: "Shop One",
                logo: "/favicon.ico",
                selectedColor: "orange"
            }   
        )
    }


    onClickbgGreen(){
        this.setState(
            {
                name: "Shop One",
                logo: "/favicon.ico",
                selectedColor: "green"
            }   
        )
    }


    render(){
        
        return (<div>


            <Button onClick={this.onClickbgOrange.bind(this)}>onClickbgOrange</Button>
            <Button onClick={this.onClickbgGreen.bind(this)}>onClickbgGreen</Button>
        
        <br/>

          <svg version="1.1" id="Livello_1" height="800" width="800">
    <g id="sar">
  

      <polygon class="st0" fill={this.state.selectedColor} points="193,463 203.6,472.3 210,472.3 207.2,482 217.6,491.5 221.5,524.9 213.6,537.5 218.8,559.4
                                   206.2,599.4 209.1,610.6 198.5,623.2 187,611.7 170.8,617.6 173.8,629.1 157.4,637.6 139.2,619.5 138.3,591.7 149.8,564.9
                                   141.1,561.1 143.2,550.4 142.1,513.4 136.4,507.9 129,505.7 128.1,502.8 136.4,498.3 133.6,482 132.6,479 141.1,474.9 143.2,487.5
                                   154.5,489.4 167.9,484.7 184,469.4 	"/>
      <foreignObject class="node" x="165" y="555"   width="40" height="40">
            <img src={this.state.logo} width="32" alt="icon" />
      </foreignObject>
      <text x="155" y="550" font-family="Verdana" font-size="10" fill="white">
        {this.state.name}
      </text>
    </g>
    <g id="sic">
      <polygon class="st0" fill="#77744d" points="374.4,704.6 363.7,710.2 365.6,729.2 370.8,741.8 400.2,750.4 430.8,770.3 449.7,778.2 467.9,785.6
                                   477.6,799.1 494.8,802.9 510.9,810.6 515.5,805.6 510.1,797.2 522.6,780.1 516.6,763.8 508.2,760.7 512,736.1 521.6,725.5
                                   530.9,694.8 513.7,694 507.3,703.5 497.5,696.7 483.2,705.5 469.8,710.2 448.8,706.5 439.2,713.1 421.2,704.6 410.5,705.5
                                   410.5,695.9 391.6,696.7 393.5,709.3 385,711.2 	"/>
    </g>
    <g id="cal">
      <polygon class="st0" fill="#875654" points="535.3,568.9 549.7,566.8 557.5,568.4 580.4,558.3 588.3,561.9 582.8,580.1 587.8,593.9 596.8,591.7
                                   606.2,602.6 615.4,602.1 616.6,627.5 621.1,634.1 621.7,647.5 605.5,643.4 589.5,655.9 589.9,685 573.9,696.5 563.2,718 542.1,718
                                   537.7,707.1 538,704.6 537.2,698.9 543.7,690.2 550.3,668.3 545.2,663.4 565.1,654 553.9,610.2 543.7,597.2 	"/>
    </g>
    <g id="bas">
      <polyline class="st0" fill="#FF6875" points="601.7,531.5 594.6,517.6 583.9,510.9 573.6,513.4 562.7,498.3 554.7,497 551.1,487.2 545.2,482.3
                                    538.9,485.6 527.8,485.3 527.8,498.6 518.5,502.5 524.9,524.7 542.4,549.6 537.7,552 530.3,566.2 530.3,566.2 534.7,568.9
                                    549.8,566.8 557.5,568.7 570.2,562.7 581.3,558 588.9,561.6 590.2,556.4 601.7,531.5 	"/>
    </g>
    <g id="pug">
      <polygon class="st0" points="495.8,462 495.1,451.6 501.6,439.3 506.3,426.9 506.3,426.5 512,428.1 558.6,429.1 565.1,437.9
                                   547.1,448.5 610,486.6 635.1,505.7 659,514.3 667.4,531.5 685.5,542.1 689.6,551.7 683.6,564 685.5,576.3 663.8,570.9 658.1,560.2
                                   655.1,548.7 636,544.9 620.7,535.3 617.9,531.5 601.7,531.5 594.6,517.6 583.9,510.9 573.6,513.4 562.7,498.3 554.7,497
                                   551.1,487.2 545.2,482.3 538.9,485.6 512,486.3 509.5,472.6 502.5,470.4 501.6,462.3 	"/>
    </g>
    <g id="cam">
      <polyline class="st0" points="430.8,479 451.6,508.7 460.5,507.9 470.9,524.1 489.6,523.2 498.6,538.3 493.9,549.6 509,555.6
                                    530,566.5 530.3,565.1 537.7,552 542.4,549.6 524.9,524.7 518.5,502.5 527.8,498.6 527.8,485.6 525.9,486 512,486.3 509.5,472.6
                                    502.5,470.4 501.6,462.3 495.8,462 477.2,466.7 462.3,457.3 450.4,464.2 436.3,463.3 439.2,472.6 430.8,479 	"/>
    </g>
    <g id="mol">
      <polygon class="st0" points="506.3,426.5 494.8,423.4 486.6,416.6 486.3,416.9 486.3,417.6 479.4,429.4 470.9,433.6 466.1,425.9
                                   454.5,425.6 440.1,435.5 441.1,456 436.3,463.3 450.4,464.2 462.3,457.3 477.2,466.7 495.8,462 495.1,451.6 501.6,439.3
                                   506.3,426.9 	"/>
    </g>
    <g id="abr">
      <polygon class="st0" points="408.8,362.9 411.8,367.3 410.3,379.3 404,379.6 412.7,410.2 399.9,412.2 398.7,420.7 415.9,433.3
                                   440.1,435.5 454.5,425.6 466.1,425.9 470.9,433.6 479.4,429.4 486.3,417.6 486.6,416.6 465.2,398.5 441.1,359.6 440.1,356.7
                                   420.1,362.9 	"/>
    </g>
    <g id="laz">
      <polyline class="st0" points="340.7,361.5 364.9,386.7 372.5,388.6 383.1,380.8 391.9,373 408.4,362.7 411.8,367.3 410.3,379.3
                                    404,379.6 412.7,410.2 399.9,412.2 398.7,420.7 415.9,433.3 440.1,435.5 441.1,456 436.3,463.3 439.2,472.6 430.8,479 392.4,471.5
                                    352.2,439.8 346.7,426.2 334.1,419.8 321.6,395.8 319.6,394.9 323.2,380.5 331.4,377.1 330.4,362.1 340.7,361.5 	"/>
    </g>
    <g id="umb">
      <polygon class="st0" points="408.1,362.9 391.9,373 383.1,380.8 372.5,388.6 364.9,386.7 340.7,361.5 340,337 352.6,331.2
                                   348.2,316.8 359.4,301.6 362.7,312.3 384,315.9 393.9,359.9 405.6,362.9 	"/>
    </g>
    <g id="mar">
      <polyline class="st0" points="359.4,301.6 362.7,312.3 384,315.9 393.9,359.9 405.6,362.9 420.1,362.9 439.2,357.2 440.4,356.4
                                    427.7,310.1 404,297.5 392.4,282.3 382.6,278.2 382.3,277.9 380.9,286.6 370.3,282 358.8,283.4 352.2,291.6 359.4,301.6 	"/>
    </g>
    <g id="tos">
      <polygon class="st0" fill={this.state.selectedColor} points="244.4,361.5 254,357.8 260.4,352.8 262.3,363.2 	"/>
      <polygon class="st0" points="247.7,273.2 247.1,262.9 236.5,252.4 235.2,242 249.1,240.7 261.4,254 272.3,255.2 277.3,264.5
                                   289.3,262.9 306,268.9 315.1,259.8 332.3,268.6 336.6,284.1 343.7,291 352.2,291.6 359.4,301.6 348.2,316.8 352.6,331.2 340,337
                                   340.7,361.5 330.4,362.1 331.4,377.1 323.2,380.5 319.6,394.9 319.6,395.3 305.5,393 298,394.9 298.9,383.4 287.4,361.5
                                   277.8,348.1 268.3,349.8 272,334.7 262.3,316.7 254,277.1 247.7,273.5 	"/>
    </g>
    <g id="emi">
      <polygon class="st0" points="382.3,277.9 380.9,286.6 370.3,282 358.8,283.4 352.2,291.6 343.7,291 336.6,284.1 332.3,268.6
                                   315.1,259.8 306,268.9 289.3,262.9 277.3,264.5 272.3,255.2 261.4,254 249.1,240.7 235.2,242 221.2,241.4 217.9,227.5 205.4,224.8
                                   205.9,217.1 212.5,218.8 212.8,211.4 216.3,208.6 212.5,202.1 219.2,192.2 249.3,190.3 280.3,208.3 289.6,203.7 290.7,201.8
                                   314.2,207.9 319.6,205.3 332,213.6 343.8,213.3 364.9,217.1 362.7,221.2 365.6,256.5 376.3,275.4 	"/>
    </g>
    <g id="fri">
      <polyline class="st0" fill={this.state.selectedColor} points="398.8,159.1 398.7,158.8 396.5,149.9 390.5,144.7 376.8,146.3 369.5,134.5 372.2,123.1 364.3,110.1
                                    384,92.3 383.7,83.9 384,83.9 425.8,90.2 431.8,96.7 414.3,106.3 417.4,115.1 427.7,115.1 420.1,130.4 428.6,135.9 427.7,145.7
                                    442,153.1 436.3,161.9 428.6,153.1 420.1,153.1 405,148.5 403.1,156.9 399.1,159.1 	"/>
    </g>
    <g id="ven">
      <polygon class="st0" points="398.8,159.1 376.3,171.2 374.4,161.9 363.7,173.1 359.9,186.5 372.5,203.7 364.6,216.8 343.8,213.3
                                   332,213.6 319.6,205.3 305.2,190 289.3,179.1 289,148.2 291.5,145.7 291.5,146 307.6,149.6 315.1,137.8 332.3,133.2 344.8,116.1
                                   337.8,108.2 342.6,93.5 361.2,86.1 371.7,75.5 371.7,75.2 380.9,83.6 383.7,83.9 384,92.3 364.3,110.1 372.2,123.1 369.5,134.5
                                   376.8,146.3 390.5,144.7 396.5,149.9 398.7,158.8 	"/>
    </g>
    <g id="tre">
      <polygon class="st0" points="365.6,70.2 358.2,51 340,57.7 313.2,56.6 299.7,72.1 289.3,64.4 280,65.1 275.7,81.4 282.5,106.3
                                   279.5,116.1 275.4,126 279.4,138.4 288.5,138.9 293.2,143.8 291.5,145.7 291.5,146 307.6,149.6 315.1,137.8 332.3,133.2
                                   344.8,116.1 337.8,108.2 342.6,93.5 361.2,86.1 371.7,75.5 371.7,75.2 	"/>
    </g>
    <g id="lom">
      <polygon class="st0" points="276.1,81.7 282.5,106.3 279.5,116.1 275.4,126 279.4,138.4 288.5,138.9 293.2,143.8 289,148.2
                                   289.3,179.1 305.2,190 319.6,205.3 314.2,207.9 290.7,201.8 289.6,203.7 280.3,208.3 249.3,190.3 219.2,192.2 212.5,202.1
                                   216.3,208.6 212.8,211.4 212.5,218.8 205.9,217.1 205.9,216.1 193.1,195.6 182.9,193.4 179.9,169.6 190.8,165.4 181,138.9
                                   187.3,127.2 178.5,104.5 194.7,111 198.5,132.3 205.4,129.5 204.3,116.1 213.6,105.5 218.8,87.4 227.2,87.4 236.8,102.7
                                   247.1,95.7 257.8,104.5 262.3,98.9 252.1,86.4 257.8,77.8 275.7,81.4 	"/>
    </g>
    <g id="lig">
      <polyline class="st0" points="124.7,253.6 145.1,254.9 148.5,243.9 156.1,229.5 169.2,233.8 176,228.6 187.6,230.5 194.4,223.1
                                    205.4,224.8 217.9,227.5 221.2,241.4 235.2,242 236.5,252.4 247.1,262.9 247.7,273.2 247.7,273.5 206.2,247.5 184,242.9
                                    171.7,247.5 160.5,259.2 154.5,270.7 124.7,281.4 116.5,272.6 124.7,253.6 	"/>
    </g>
    <g id="pie">
      <polygon class="st0" points="110.6,153.1 129.3,155.6 139.6,149.9 145.7,151.2 151.1,146.6 147,128.8 147,122.5 177.7,85.5
                                   178.5,104.5 187.3,127.2 181,138.9 190.8,165.4 179.9,169.6 182.9,193.4 193.1,195.6 205.9,216.1 205.4,224.8 194.4,223.1
                                   187.6,230.5 176,228.6 169.2,233.8 156.1,229.5 148.5,243.9 145.1,254.9 124.7,253.6 88.7,239.3 86.9,219.1 101.3,205.9
                                   89.6,198.2 86.9,186.5 80,181 106.8,169.3 	"/>
    </g>
    <g id="vao">
      <polygon class="st0" points="110.6,153.1 129.3,155.6 139.6,149.9 145.7,151.2 151.1,146.6 147,128.8 147,122.5 130.7,117
                                   103.2,122.5 93.4,131.3 99.4,137 99.4,141.7 	"/>
    </g>
  </svg>

      </div>);

    }

}

export default D3Map;