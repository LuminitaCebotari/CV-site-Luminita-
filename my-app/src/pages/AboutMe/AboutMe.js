import React, { Component } from "react";
import "./AboutMe.css";
import MyPhoto from "../../myPhoto1.jpg";


class AboutMe extends Component {

    state = {}; 

    render() {
        return(
    <div className = "page2-content" id="aboutMe">
                <div className = "AboutMeTitle">
                                <h2>About Me:</h2>
                </div>
                <div className ="description-container">
                            <div className ="description-text">
                                <p>Hi, my name is Luminița. Currently,  
                                    I  have decited to make a big change in my career and to embrace
                                    the univers of web developement.
                                    Even though I am at the begining of this road I feel preaty optimistic as I descovered a true passion for it. </p>
                            </div>
                            <div className ="myPhoto">
                                <img className="Photo" src={MyPhoto} />
                    </div>
                
                </div>
                <div className="animation">
        <svg width="490" height="300" viewBox="0 0 490 375" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_code_typing_7jnv 1">
<path id="Vector" d="M421.088 149.487C399.551 64.1486 325.135 2.54603 237.787 0.0751998C191.609 -1.23105 143.017 14.2021 107.638 68.2083C44.3943 164.75 111.524 231.464 158.326 263.165C180.936 278.511 201.31 296.964 218.856 317.988C250.469 355.79 311.284 402.765 383.713 329.163C436.21 275.816 435.433 206.331 421.088 149.487Z" fill="#FFBDBD" fill-opacity="0.03"/>
<path id="Vector_2" opacity="0.1" d="M197.531 188.928H215.546V170.775H197.531V188.928ZM287.965 170.775H269.95V188.928H287.965V170.775ZM233.741 188.928H251.756V170.775H233.741V188.928Z" fill="black"/>
<path id="Vector_3" d="M389.808 173.751C389.808 173.751 375.942 163.143 374.889 167.031C373.837 170.92 385.064 179.759 385.064 179.759L389.808 173.751Z" fill="#FFB9B9"/>
<path id="Vector_4" opacity="0.1" d="M389.808 173.751C389.808 173.751 375.942 163.143 374.889 167.031C373.837 170.92 385.064 179.759 385.064 179.759L389.808 173.751Z" fill="black"/>
<path id="Vector_5" d="M435.583 140.163C435.583 140.163 419.094 169.86 418.743 174.102C418.392 178.344 418.392 178.698 416.989 178.344C415.586 177.991 396.29 175.87 394.536 176.577C392.782 177.284 389.273 172.334 389.273 172.334C389.273 172.334 382.608 179.051 384.011 180.466C385.414 181.88 389.624 182.587 390.326 184.354C391.028 186.122 392.08 187.89 395.238 187.536C398.395 187.183 419.796 193.193 422.602 192.132C425.409 191.072 426.111 189.304 427.514 189.304C428.917 189.304 431.724 187.89 431.724 187.536C431.724 187.183 441.547 168.445 441.547 168.445C441.547 168.445 453.125 142.991 435.583 140.163Z" fill="#D0CDE1"/>
<path id="Vector_6" opacity="0.1" d="M435.583 140.163C435.583 140.163 419.094 169.86 418.743 174.102C418.392 178.344 418.392 178.698 416.989 178.344C415.586 177.991 396.29 175.87 394.536 176.577C392.782 177.284 389.273 172.334 389.273 172.334C389.273 172.334 382.608 179.051 384.011 180.466C385.414 181.88 389.624 182.587 390.326 184.354C391.028 186.122 392.08 187.89 395.238 187.536C398.395 187.183 419.796 193.193 422.602 192.132C425.409 191.072 426.111 189.304 427.514 189.304C428.917 189.304 431.724 187.89 431.724 187.536C431.724 187.183 441.547 168.445 441.547 168.445C441.547 168.445 453.125 142.991 435.583 140.163Z" fill="black"/>
<path id="Vector_7" d="M411.66 120.585C411.511 122.463 411.541 124.35 411.75 126.222C412.283 130.284 414.138 134.518 412.386 138.309C411.75 139.685 410.672 140.884 410.085 142.277C408.842 145.225 409.969 148.495 409.8 151.633C409.582 155.687 407.023 159.593 403.131 161.814C409.78 162.022 416.104 158.709 420.287 154.195C424.471 149.681 426.801 144.082 428.547 138.48C429.445 135.849 430.021 133.117 430.261 130.346C430.4 128.754 430.215 127.15 429.717 125.633C429.102 124.15 428.293 122.758 427.311 121.492C426.263 120.008 425.187 118.494 423.641 117.39C421.738 116.03 418.067 114.664 415.541 114.862C412.444 115.105 411.791 118.419 411.66 120.585Z" fill="#2F2E41"/>
<path id="Vector_8" d="M421.901 131.678C421.901 131.678 425.76 145.466 422.602 149.355C419.445 153.244 441.547 147.587 441.547 147.587C441.547 147.587 430.672 136.628 435.934 129.557L421.901 131.678Z" fill="#FFB9B9"/>
<path id="Vector_9" opacity="0.1" d="M421.901 131.678C421.901 131.678 425.76 145.466 422.602 149.355C419.445 153.244 441.547 147.587 441.547 147.587C441.547 147.587 430.672 136.628 435.934 129.557L421.901 131.678Z" fill="black"/>
<path id="arrow-right" d="M319 217.612L363.316 173.091L319 128.57L332.511 115L390.338 173.091L332.511 231.181L319 217.612Z" fill="#6A57BF"/>
<path id="Vector_10" d="M409.271 315.515V325.767L414.533 332.131L419.094 330.009L417.691 315.161L409.271 315.515Z" fill="#FFB9B9"/>
<path id="Vector_11" d="M411.376 325.06C411.376 325.06 409.972 320.111 407.517 323.646C405.061 327.181 402.605 334.959 401.202 335.312C399.798 335.666 389.975 346.625 399.798 346.625C409.622 346.625 412.779 342.03 412.779 342.03C412.779 342.03 422.602 338.141 422.602 337.434C422.602 336.727 421.199 323.646 420.497 323.646C419.796 323.646 419.445 326.121 417.691 326.121C415.937 326.121 411.376 325.06 411.376 325.06Z" fill="#2F2E41"/>
<path id="Vector_12" d="M432.777 317.283L432.426 326.828L440.846 330.363V316.575L432.777 317.283Z" fill="#FFB9B9"/>
<path id="Vector_13" d="M441.898 326.828C441.898 326.828 437.337 321.878 434.882 322.939C433.667 323.432 432.493 324.023 431.373 324.707C431.373 324.707 429.97 329.302 429.268 333.191C428.567 337.08 428.216 338.848 427.514 340.262C426.812 341.676 426.111 346.979 433.127 347.686C440.144 348.393 442.249 344.504 442.249 344.504L444.003 335.313C444.003 335.313 443.302 326.828 441.898 326.828Z" fill="#2F2E41"/>
<path id="Vector_14" d="M413.832 215.465C413.832 215.465 403.658 238.445 405.061 259.303C405.061 259.303 401.553 267.434 403.658 280.162C405.763 292.889 408.569 318.343 408.569 318.343C408.569 318.343 418.042 319.404 418.743 317.636C418.743 317.636 419.445 299.959 420.147 299.252C420.848 298.545 419.796 282.283 418.743 279.101C417.691 275.919 428.567 244.455 428.567 244.455L425.76 205.213L413.832 215.465Z" fill="#2F2E41"/>
<path id="Vector_15" opacity="0.1" d="M413.832 215.465C413.832 215.465 403.658 238.445 405.061 259.303C405.061 259.303 401.553 267.434 403.658 280.162C405.763 292.889 408.569 318.343 408.569 318.343C408.569 318.343 418.042 319.404 418.743 317.636C418.743 317.636 419.445 299.959 420.147 299.252C420.848 298.545 419.796 282.283 418.743 279.101C417.691 275.919 428.567 244.455 428.567 244.455L425.76 205.213L413.832 215.465Z" fill="black"/>
<path id="Vector_16" d="M411.025 214.051L417.691 228.546C417.691 228.546 420.848 261.424 422.602 265.667C422.602 265.667 423.304 277.687 426.462 281.576C429.619 285.464 432.075 319.757 432.075 319.757C432.075 319.757 440.846 322.232 441.547 319.757C442.249 317.282 444.354 300.313 444.354 300.313C444.354 300.313 445.056 285.818 441.197 276.273C437.337 266.727 445.757 232.435 445.757 232.435C445.757 232.435 454.528 215.819 441.898 202.385L411.025 214.051Z" fill="#2F2E41"/>
<path id="Vector_17" d="M429.619 135.921C437.563 135.921 444.003 129.431 444.003 121.426C444.003 113.421 437.563 106.931 429.619 106.931C421.675 106.931 415.235 113.421 415.235 121.426C415.235 129.431 421.675 135.921 429.619 135.921Z" fill="#FFB9B9"/>
<path id="Vector_18" d="M442.951 143.345C442.951 143.345 427.865 143.345 425.76 145.112C425.24 145.612 424.549 145.89 423.83 145.89C423.112 145.89 422.421 145.612 421.901 145.112C421.901 145.112 416.638 145.466 415.235 149.708C413.832 153.951 409.622 159.607 409.622 159.607C409.622 159.607 403.307 164.203 406.815 176.223C410.323 188.243 407.517 207.688 407.517 207.688C407.517 207.688 404.71 211.93 407.517 213.698C410.323 215.465 411.376 216.172 411.025 217.586C410.674 219.001 442.951 205.92 442.951 203.445C442.951 200.971 442.249 198.849 442.951 197.789C443.652 196.728 444.354 194.96 443.652 193.193C442.951 191.425 444.354 191.072 444.003 189.304C443.652 187.536 445.757 174.456 447.161 168.799C448.564 163.143 448.213 143.698 442.951 143.345Z" fill="#FFB9B9"/>
<path id="Vector_19" d="M389.808 177.994C389.808 177.994 375.942 167.385 374.889 171.274C373.837 175.163 385.064 184.001 385.064 184.001L389.808 177.994Z" fill="#FFB9B9"/>
<path id="Vector_20" d="M435.583 145.112C435.583 145.112 419.094 174.809 418.743 179.051C418.392 183.294 418.392 183.647 416.989 183.294C415.586 182.94 396.29 180.819 394.536 181.526C392.782 182.233 389.273 177.284 389.273 177.284C389.273 177.284 382.608 184.001 384.011 185.415C385.414 186.829 389.624 187.536 390.326 189.304C391.028 191.072 392.08 192.839 395.238 192.486C398.395 192.132 419.796 198.142 422.602 197.082C425.409 196.021 426.111 194.253 427.514 194.253C428.917 194.253 431.724 192.839 431.724 192.486C431.724 192.132 441.547 173.395 441.547 173.395C441.547 173.395 453.125 147.941 435.583 145.112Z" fill="#F2AAA6"/>
<path id="Vector_21" d="M422.496 130.686C422.297 129.251 421.567 127.949 421.193 126.549C420.9 125.429 420.835 124.26 421.002 123.114C421.169 121.968 421.564 120.868 422.163 119.88C424.227 116.522 428.277 115.034 431.102 112.297C431.161 113.691 432.121 114.883 433.182 115.78C434.244 116.676 435.461 117.404 436.36 118.466C437.223 119.587 437.853 120.872 438.21 122.244C438.764 123.833 439.012 125.515 438.941 127.198C438.901 128.039 438.691 128.863 438.325 129.62C437.959 130.377 437.444 131.051 436.811 131.601C435.759 132.439 434.288 132.918 433.78 134.168C433.58 134.793 433.522 135.456 433.611 136.106C433.852 139.996 434.077 143.955 433.168 147.742C432.259 151.53 430.032 155.19 426.542 156.869C429.41 157.074 432.339 157.274 435.121 156.545C437.904 155.815 440.565 153.978 441.524 151.247C441.998 149.9 442.042 148.401 442.715 147.143C444.417 143.957 449.116 143.812 451.425 141.042C452.349 139.933 452.796 138.504 453.127 137.096C455.076 128.807 453.707 120.005 450.739 112.028C449.716 109.279 448.443 106.511 446.249 104.579C444.382 102.934 441.998 102.028 439.641 101.255C436.2 100.125 432.656 99.2002 429.039 99.081C427.468 98.988 425.893 99.1733 424.385 99.6285C422.897 100.17 421.512 100.965 420.291 101.979C414.625 106.421 410.768 113.521 411.28 120.736C411.59 125.102 413.425 129.233 415.784 132.909C416.608 134.194 418.557 136.936 420.368 136.127C422.011 135.394 422.712 132.237 422.496 130.686Z" fill="#2F2E41"/>
<path id="Vector_22" d="M197.531 180.305H215.546V162.152H197.531V180.305ZM287.965 162.152H269.95V180.305H287.965V162.152ZM233.741 180.305H251.756V162.152H233.741V180.305Z" fill="#6A57BF"/>
<path id="Vector_23" d="M92.8685 108.054C101.24 108.054 108.026 102.72 108.026 96.1396C108.026 89.5595 101.24 84.2253 92.8685 84.2253C84.4969 84.2253 77.7105 89.5595 77.7105 96.1396C77.7105 102.72 84.4969 108.054 92.8685 108.054Z" fill="#2F2E41"/>
<path id="Vector_24" d="M95.4453 178.164C95.4453 178.164 109.087 179.081 111.513 177.248C113.938 175.415 124.245 179.692 125.155 182.136C126.064 184.58 110.603 184.885 108.178 184.885C105.753 184.885 94.2327 188.551 94.2327 188.551L95.4453 178.164Z" fill="#A0616A"/>
<path id="Vector_25" d="M67.3535 320.469C67.3535 320.469 60.9956 336.626 64.3128 338.575C67.6299 340.525 102.46 339.133 102.46 339.133C102.46 339.133 108.265 335.511 101.63 333.004C101.63 333.004 96.1019 332.726 92.5083 330.497C88.9148 328.269 84.7684 324.091 84.7684 324.091C84.7684 324.091 84.492 317.962 82.2806 319.355C81.6189 319.794 81.0558 320.368 80.6273 321.04C80.1989 321.712 79.9146 322.466 79.7927 323.255L67.3535 320.469Z" fill="#2F2E41"/>
<path id="Vector_26" opacity="0.1" d="M67.3535 320.469C67.3535 320.469 60.9956 336.626 64.3128 338.575C67.6299 340.525 102.46 339.133 102.46 339.133C102.46 339.133 108.265 335.511 101.63 333.004C101.63 333.004 96.1019 332.726 92.5083 330.497C88.9148 328.269 84.7684 324.091 84.7684 324.091C84.7684 324.091 84.492 317.962 82.2806 319.355C81.6189 319.794 81.0558 320.368 80.6273 321.04C80.1989 321.712 79.9146 322.466 79.7927 323.255L67.3535 320.469Z" fill="black"/>
<path id="arrow-left" d="M178.338 217.612L133.977 173.091L178.293 128.57L164.782 115L107 173.091L164.827 231.181L178.338 217.612Z" fill="#6A57BF"/>
<path id="Vector_27" d="M57.5504 325.412C57.5504 325.412 50.5777 343.13 54.2156 345.269C57.8535 347.407 96.0516 345.88 96.0516 345.88C96.0516 345.88 102.418 341.909 95.1421 339.159C95.1421 339.159 89.0789 338.854 85.1379 336.41C81.1968 333.966 76.6494 329.383 76.6494 329.383C76.6494 329.383 76.3463 322.663 73.921 324.19C73.1954 324.672 72.5778 325.301 72.1079 326.038C71.638 326.774 71.3262 327.602 71.1925 328.467L57.5504 325.412Z" fill="#2F2E41"/>
<path id="Vector_28" d="M93.3232 212.991L89.079 251.483C89.079 251.483 87.5632 269.812 83.0158 273.784C83.0158 273.784 83.0158 279.588 81.5 281.421L79.3778 305.555C79.3778 305.555 82.4094 314.414 82.1063 315.942C81.8031 317.469 83.3189 322.357 83.0158 322.968C82.7126 323.579 68.4641 322.968 68.4641 322.968L71.4957 273.784L80.8936 205.353L93.3232 212.991Z" fill="#2F2E41"/>
<path id="Vector_29" opacity="0.1" d="M93.3232 212.991L89.079 251.483C89.079 251.483 87.5632 269.812 83.0158 273.784C83.0158 273.784 83.0158 279.588 81.5 281.421L79.3778 305.555C79.3778 305.555 82.4094 314.414 82.1063 315.942C81.8031 317.469 83.3189 322.357 83.0158 322.968C82.7126 323.579 68.4641 322.968 68.4641 322.968L71.4957 273.784L80.8936 205.353L93.3232 212.991Z" fill="black"/>
<path id="Vector_30" d="M85.7442 211.769C85.7442 211.769 82.4094 243.234 80.8936 249.955C79.9406 254.381 79.3324 258.875 79.0747 263.397C79.0747 263.397 78.7715 273.173 76.0431 275.922C75.2448 276.719 74.6176 277.672 74.2003 278.723C73.7831 279.774 73.5848 280.9 73.6178 282.032C73.6178 282.032 70.8894 312.887 72.4052 316.553C73.921 320.219 75.4368 323.273 73.921 325.717C72.4052 328.161 55.7314 328.161 55.7314 326.328C55.7314 324.495 55.7314 322.968 54.8219 322.051C53.9124 321.135 54.8219 315.331 54.8219 315.331C54.8219 315.331 51.184 288.142 54.5188 280.199C57.8535 272.256 59.3693 250.566 59.3693 250.566C59.3693 250.566 56.944 225.821 53.9124 221.85C50.8808 217.878 54.5188 203.826 54.5188 203.826L85.7442 211.769Z" fill="#2F2E41"/>
<path id="Vector_31" d="M77.2091 114.054C77.5615 114.863 78.4051 115.313 79.1731 115.74C83.624 118.211 87.3498 121.793 91.0205 125.335C90.1045 122.207 90.2997 118.855 91.5723 115.857C92.0106 114.834 92.585 113.735 92.2718 112.666C92.0414 111.881 91.3775 111.314 90.7345 110.813C89.2366 109.645 87.6711 108.569 86.0463 107.59C84.9111 106.905 82.5774 105.083 81.2748 105.282C81.2064 107.055 81.1707 108.641 80.4 110.298C80.2171 110.692 77.3438 114.363 77.2091 114.054Z" fill="#A0616A"/>
<path id="Vector_32" d="M92.7169 117.982C99.5815 117.982 105.146 112.375 105.146 105.457C105.146 98.5396 99.5815 92.9319 92.7169 92.9319C85.8522 92.9319 80.2873 98.5396 80.2873 105.457C80.2873 112.375 85.8522 117.982 92.7169 117.982Z" fill="#A0616A"/>
<path id="Vector_33" d="M93.3232 135.09C93.3232 135.09 95.4453 124.398 89.3821 120.732C83.3189 117.066 76.3463 112.789 76.3463 112.789C76.3463 112.789 74.2241 112.483 73.3147 117.066C73.3147 117.066 56.0346 120.426 54.2156 136.923C52.3966 153.419 55.4282 177.553 55.4282 177.553C55.4282 177.553 52.6998 198.632 49.3651 209.936C49.3651 209.936 46.6366 212.38 58.763 208.714C70.8894 205.048 92.1105 219.1 92.1105 219.1C92.1105 219.1 94.2327 216.962 94.2327 215.434C94.2327 213.907 96.6579 205.048 96.6579 205.048C96.6579 205.048 98.7801 167.472 99.6895 163.195C100.599 158.918 96.0516 135.701 93.3232 135.09Z" fill="#9490D4"/>
<path id="Vector_34" d="M89.7875 106.747C90.5343 106.33 91.3716 106.106 92.2253 106.093C93.0799 106.08 93.9144 105.83 94.6367 105.369C95.8108 104.461 95.8969 102.705 96.7559 101.491C97.9994 99.7319 100.48 99.5202 102.621 99.6082C103.931 99.662 105.341 99.7408 106.444 99.027C107.577 98.2943 108.09 96.9136 108.471 95.6133C108.923 94.0757 109.215 92.1953 108.096 91.055C107.319 90.2631 106.093 90.1065 105.23 89.411C104.335 88.6899 103.967 87.5163 103.481 86.471C102.927 85.1973 102.052 84.0923 100.942 83.2664C99.314 82.1266 97.2348 81.871 95.2526 81.8923C93.2704 81.9137 91.2799 82.1764 89.3125 81.9312C87.7007 81.7304 86.0936 81.1901 84.4869 81.4296C82.4396 81.7347 80.7459 83.2912 79.7371 85.1121C78.7284 86.9331 78.2955 89.0116 77.8758 91.0537L76.7342 96.6078C76.3802 98.3305 76.0247 100.099 76.298 101.836C76.8646 105.438 80.0256 108.301 80.2434 111.942C80.4511 110.936 80.903 109.999 81.5588 109.213C82.2146 108.427 83.0537 107.818 84.0009 107.439C84.2383 107.322 84.508 107.289 84.7664 107.346C85.0805 107.447 85.264 107.763 85.4622 108.028C85.9815 108.724 87.6129 109.78 88.5376 109.286C89.365 108.845 88.7473 107.458 89.7875 106.747Z" fill="#2F2E41"/>
<path id="Vector_35" d="M58.4598 163.806C58.4598 163.806 56.3377 177.248 65.1293 176.026C65.1293 176.026 69.6767 175.415 70.283 176.026C70.8894 176.637 93.3232 172.666 96.3548 169.305C96.3548 169.305 99.9927 168.083 101.812 169.916C103.631 171.749 121.82 173.582 116.363 168.083C110.906 162.584 102.418 161.362 102.418 161.362L90.8979 161.973C90.8979 161.973 84.8347 163.806 81.1968 161.973C77.5589 160.14 67.2514 160.751 67.2514 160.751L58.4598 163.806Z" fill="#A0616A"/>
<path id="Vector_36" d="M70.8894 121.343C70.8894 121.343 57.2472 122.87 57.2472 142.727V168.083C57.2472 168.083 64.8262 164.723 66.342 165.028C67.8578 165.334 73.921 161.057 73.921 161.057C73.921 161.057 80.8936 144.56 80.2873 139.978C79.681 135.395 79.9842 121.954 70.8894 121.343Z" fill="#575A89"/>
<path id="Vector_37" d="M92.7169 103.777C99.1629 103.777 104.389 101.041 104.389 97.667C104.389 94.2926 99.1629 91.5571 92.7169 91.5571C86.2708 91.5571 81.0452 94.2926 81.0452 97.667C81.0452 101.041 86.2708 103.777 92.7169 103.777Z" fill="#2F2E41"/>
<path id="Vector_38" d="M81.8031 108.97C84.0634 108.97 85.8958 104.388 85.8958 98.7362C85.8958 93.0841 84.0634 88.5022 81.8031 88.5022C79.5428 88.5022 77.7105 93.0841 77.7105 98.7362C77.7105 104.388 79.5428 108.97 81.8031 108.97Z" fill="#2F2E41"/>
</g>
</svg>
        </div>
      
     </div>
        )
    }
}

export default AboutMe; 