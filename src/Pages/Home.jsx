import React from "react";
import { Link } from "react-router-dom";
import developer from "../media/code.svg";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <svg
            width="808"
            height="78"
            viewBox="0 0 808 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="UI"
          >
            <path
              d="M29.8 61.96C32.296 61.96 34.52 61.544 36.472 60.712C38.456 59.88 40.12 58.712 41.464 57.208C42.808 55.704 43.832 53.88 44.536 51.736C45.272 49.592 45.64 47.192 45.64 44.536V2.968H58.552V44.536C58.552 48.664 57.88 52.488 56.536 56.008C55.224 59.496 53.32 62.52 50.824 65.08C48.36 67.608 45.352 69.592 41.8 71.032C38.248 72.44 34.248 73.144 29.8 73.144C25.32 73.144 21.304 72.44 17.752 71.032C14.2 69.592 11.176 67.608 8.68 65.08C6.216 62.52 4.312 59.496 2.968 56.008C1.656 52.488 1 48.664 1 44.536V2.968H13.912V44.488C13.912 47.144 14.264 49.544 14.968 51.688C15.704 53.832 16.744 55.672 18.088 57.208C19.464 58.712 21.128 59.88 23.08 60.712C25.064 61.544 27.304 61.96 29.8 61.96Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M86.074 72.376H73.114V2.968H86.074V72.376Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M107.998 72.52C107.454 73.992 106.574 75.096 105.358 75.832C104.174 76.568 102.958 76.936 101.71 76.936H96.67L124.702 5.224C125.214 3.88 125.998 2.856 127.054 2.152C128.11 1.416 129.342 1.048 130.75 1.048H135.838L107.998 72.52Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M174.269 61.96C176.765 61.96 178.989 61.544 180.941 60.712C182.925 59.88 184.589 58.712 185.933 57.208C187.277 55.704 188.301 53.88 189.005 51.736C189.741 49.592 190.109 47.192 190.109 44.536V2.968H203.021V44.536C203.021 48.664 202.349 52.488 201.005 56.008C199.693 59.496 197.789 62.52 195.293 65.08C192.829 67.608 189.821 69.592 186.269 71.032C182.717 72.44 178.717 73.144 174.269 73.144C169.789 73.144 165.773 72.44 162.221 71.032C158.669 69.592 155.645 67.608 153.149 65.08C150.685 62.52 148.781 59.496 147.437 56.008C146.125 52.488 145.469 48.664 145.469 44.536V2.968H158.381V44.488C158.381 47.144 158.733 49.544 159.437 51.688C160.173 53.832 161.213 55.672 162.557 57.208C163.933 58.712 165.597 59.88 167.549 60.712C169.533 61.544 171.773 61.96 174.269 61.96Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M273.983 72.376H261.119C260.223 72.376 259.503 72.152 258.959 71.704C258.447 71.256 258.031 70.744 257.711 70.168L241.631 43.528C241.375 44.328 241.071 45.016 240.719 45.592L225.311 70.168C224.927 70.712 224.479 71.224 223.967 71.704C223.487 72.152 222.847 72.376 222.047 72.376H209.999L233.039 36.664L210.911 2.968H223.775C224.671 2.968 225.311 3.096 225.695 3.352C226.111 3.576 226.495 3.96 226.847 4.504L242.639 29.944C242.959 29.144 243.343 28.344 243.791 27.544L258.287 4.744C258.639 4.136 259.023 3.688 259.439 3.4C259.855 3.112 260.383 2.968 261.023 2.968H273.359L251.039 36.136L273.983 72.376Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M327.893 37.864C330.261 37.864 332.325 37.576 334.085 37C335.845 36.392 337.301 35.544 338.453 34.456C339.637 33.336 340.517 31.992 341.093 30.424C341.669 28.824 341.957 27.048 341.957 25.096C341.957 23.24 341.669 21.56 341.093 20.056C340.517 18.552 339.653 17.272 338.501 16.216C337.349 15.16 335.893 14.36 334.133 13.816C332.373 13.24 330.293 12.952 327.893 12.952H318.245V37.864H327.893ZM327.893 2.968C332.533 2.968 336.549 3.512 339.941 4.6C343.333 5.688 346.133 7.208 348.341 9.16C350.549 11.112 352.181 13.448 353.237 16.168C354.325 18.888 354.869 21.864 354.869 25.096C354.869 28.456 354.309 31.544 353.189 34.36C352.069 37.144 350.389 39.544 348.149 41.56C345.909 43.576 343.093 45.144 339.701 46.264C336.341 47.384 332.405 47.944 327.893 47.944H318.245V72.376H305.333V2.968H327.893Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M373.332 31.672C374.868 28.728 376.692 26.424 378.804 24.76C380.916 23.064 383.412 22.216 386.292 22.216C388.564 22.216 390.388 22.712 391.764 23.704L390.996 32.584C390.836 33.16 390.596 33.576 390.276 33.832C389.988 34.056 389.588 34.168 389.076 34.168C388.596 34.168 387.876 34.088 386.916 33.928C385.988 33.768 385.076 33.688 384.18 33.688C382.868 33.688 381.7 33.88 380.676 34.264C379.652 34.648 378.724 35.208 377.892 35.944C377.092 36.648 376.372 37.512 375.732 38.536C375.124 39.56 374.548 40.728 374.004 42.04V72.376H362.148V23.128H369.108C370.324 23.128 371.172 23.352 371.652 23.8C372.132 24.216 372.452 24.984 372.612 26.104L373.332 31.672Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M423.32 51.352C419.896 51.512 417.016 51.816 414.68 52.264C412.344 52.68 410.472 53.224 409.064 53.896C407.656 54.568 406.648 55.352 406.04 56.248C405.432 57.144 405.128 58.12 405.128 59.176C405.128 61.256 405.736 62.744 406.952 63.64C408.2 64.536 409.816 64.984 411.8 64.984C414.232 64.984 416.329 64.552 418.089 63.688C419.881 62.792 421.624 61.448 423.32 59.656V51.352ZM396.152 29.992C401.816 24.808 408.632 22.216 416.6 22.216C419.48 22.216 422.056 22.696 424.328 23.656C426.6 24.584 428.521 25.896 430.089 27.592C431.656 29.256 432.841 31.256 433.641 33.592C434.473 35.928 434.888 38.488 434.888 41.272V72.376H429.512C428.392 72.376 427.529 72.216 426.921 71.896C426.313 71.544 425.832 70.856 425.48 69.832L424.424 66.28C423.176 67.4 421.96 68.392 420.776 69.256C419.592 70.088 418.36 70.792 417.08 71.368C415.8 71.944 414.424 72.376 412.952 72.664C411.512 72.984 409.912 73.144 408.152 73.144C406.072 73.144 404.152 72.872 402.392 72.328C400.632 71.752 399.112 70.904 397.832 69.784C396.552 68.664 395.56 67.272 394.856 65.608C394.152 63.944 393.8 62.008 393.8 59.8C393.8 58.552 394.008 57.32 394.424 56.104C394.84 54.856 395.512 53.672 396.44 52.552C397.4 51.432 398.632 50.376 400.136 49.384C401.64 48.392 403.48 47.528 405.656 46.792C407.864 46.056 410.424 45.464 413.336 45.016C416.248 44.536 419.576 44.248 423.32 44.152V41.272C423.32 37.976 422.616 35.544 421.208 33.976C419.8 32.376 417.768 31.576 415.112 31.576C413.192 31.576 411.593 31.8 410.312 32.248C409.064 32.696 407.96 33.208 407 33.784C406.04 34.328 405.16 34.824 404.36 35.272C403.592 35.72 402.728 35.944 401.768 35.944C400.936 35.944 400.232 35.736 399.656 35.32C399.08 34.872 398.616 34.36 398.264 33.784L396.152 29.992Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M481.335 33.544C480.983 33.992 480.631 34.344 480.279 34.6C479.959 34.856 479.479 34.984 478.839 34.984C478.23 34.984 477.639 34.808 477.062 34.456C476.487 34.072 475.798 33.656 474.998 33.208C474.198 32.728 473.239 32.312 472.118 31.96C471.031 31.576 469.67 31.384 468.038 31.384C465.958 31.384 464.134 31.768 462.566 32.536C460.998 33.272 459.686 34.344 458.63 35.752C457.606 37.16 456.838 38.872 456.326 40.888C455.814 42.872 455.559 45.128 455.559 47.656C455.559 50.28 455.83 52.616 456.374 54.664C456.95 56.712 457.766 58.44 458.822 59.848C459.878 61.224 461.158 62.28 462.662 63.016C464.166 63.72 465.862 64.072 467.75 64.072C469.638 64.072 471.158 63.848 472.31 63.4C473.494 62.92 474.486 62.408 475.286 61.864C476.087 61.288 476.774 60.776 477.35 60.328C477.958 59.848 478.63 59.608 479.366 59.608C480.326 59.608 481.046 59.976 481.526 60.712L484.934 65.032C483.622 66.568 482.198 67.864 480.662 68.92C479.126 69.944 477.526 70.776 475.862 71.416C474.23 72.024 472.534 72.456 470.774 72.712C469.046 72.968 467.318 73.096 465.59 73.096C462.55 73.096 459.686 72.536 456.998 71.416C454.31 70.264 451.958 68.6 449.942 66.424C447.926 64.248 446.326 61.592 445.142 58.456C443.99 55.288 443.414 51.688 443.414 47.656C443.414 44.04 443.927 40.696 444.951 37.624C446.007 34.52 447.542 31.848 449.558 29.608C451.574 27.336 454.07 25.56 457.046 24.28C460.022 23 463.446 22.36 467.318 22.36C470.998 22.36 474.214 22.952 476.966 24.136C479.75 25.32 482.246 27.016 484.454 29.224L481.335 33.544Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M542.047 72.376H530.191V32.008H507.343V58.696C507.343 60.232 507.711 61.432 508.447 62.296C509.215 63.16 510.255 63.592 511.567 63.592C512.303 63.592 512.911 63.512 513.391 63.352C513.903 63.16 514.335 62.968 514.687 62.776C515.071 62.584 515.407 62.408 515.695 62.248C515.983 62.056 516.271 61.96 516.559 61.96C516.911 61.96 517.199 62.056 517.423 62.248C517.647 62.408 517.887 62.664 518.143 63.016L521.695 68.776C519.967 70.216 517.983 71.304 515.743 72.04C513.503 72.776 511.183 73.144 508.783 73.144C504.495 73.144 501.199 71.944 498.895 69.544C496.623 67.112 495.487 63.768 495.487 59.512V32.008H490.447C489.807 32.008 489.263 31.8 488.815 31.384C488.367 30.968 488.143 30.344 488.143 29.512V24.808L496.063 23.464L498.559 10.072C498.719 9.432 499.023 8.936 499.471 8.584C499.919 8.232 500.495 8.056 501.199 8.056H507.343V23.56H542.047V72.376ZM544.111 8.584C544.111 9.608 543.903 10.584 543.487 11.512C543.071 12.408 542.511 13.192 541.807 13.864C541.135 14.536 540.319 15.08 539.359 15.496C538.431 15.88 537.439 16.072 536.383 16.072C535.359 16.072 534.399 15.88 533.503 15.496C532.607 15.08 531.823 14.536 531.151 13.864C530.479 13.192 529.935 12.408 529.519 11.512C529.135 10.584 528.943 9.608 528.943 8.584C528.943 7.528 529.135 6.552 529.519 5.656C529.935 4.728 530.479 3.928 531.151 3.256C531.823 2.552 532.607 2.008 533.503 1.624C534.399 1.208 535.359 1 536.383 1C537.439 1 538.431 1.208 539.359 1.624C540.319 2.008 541.135 2.552 541.807 3.256C542.511 3.928 543.071 4.728 543.487 5.656C543.903 6.552 544.111 7.528 544.111 8.584Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M603.828 72.376H591.972V32.008H569.124V58.696C569.124 60.232 569.492 61.432 570.228 62.296C570.996 63.16 572.036 63.592 573.348 63.592C574.084 63.592 574.692 63.512 575.172 63.352C575.684 63.16 576.116 62.968 576.468 62.776C576.852 62.584 577.188 62.408 577.476 62.248C577.764 62.056 578.052 61.96 578.34 61.96C578.692 61.96 578.98 62.056 579.204 62.248C579.428 62.408 579.668 62.664 579.924 63.016L583.476 68.776C581.748 70.216 579.764 71.304 577.524 72.04C575.284 72.776 572.964 73.144 570.564 73.144C566.276 73.144 562.98 71.944 560.676 69.544C558.404 67.112 557.268 63.768 557.268 59.512V32.008H552.228C551.588 32.008 551.044 31.8 550.596 31.384C550.148 30.968 549.924 30.344 549.924 29.512V24.808L557.844 23.464L560.34 10.072C560.5 9.432 560.804 8.936 561.252 8.584C561.7 8.232 562.276 8.056 562.98 8.056H569.124V23.56H603.828V72.376ZM605.892 8.584C605.892 9.608 605.684 10.584 605.268 11.512C604.852 12.408 604.292 13.192 603.588 13.864C602.916 14.536 602.1 15.08 601.14 15.496C600.212 15.88 599.22 16.072 598.164 16.072C597.14 16.072 596.18 15.88 595.284 15.496C594.388 15.08 593.604 14.536 592.932 13.864C592.26 13.192 591.716 12.408 591.3 11.512C590.916 10.584 590.724 9.608 590.724 8.584C590.724 7.528 590.916 6.552 591.3 5.656C591.716 4.728 592.26 3.928 592.932 3.256C593.604 2.552 594.388 2.008 595.284 1.624C596.18 1.208 597.14 1 598.164 1C599.22 1 600.212 1.208 601.14 1.624C602.1 2.008 602.916 2.552 603.588 3.256C604.292 3.928 604.852 4.728 605.268 5.656C605.684 6.552 605.892 7.528 605.892 8.584Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M637.721 22.36C641.369 22.36 644.681 22.952 647.657 24.136C650.665 25.32 653.225 27 655.337 29.176C657.481 31.352 659.129 34.008 660.281 37.144C661.433 40.28 662.009 43.784 662.009 47.656C662.009 51.56 661.433 55.08 660.281 58.216C659.129 61.352 657.481 64.024 655.337 66.232C653.225 68.44 650.665 70.136 647.657 71.32C644.681 72.504 641.369 73.096 637.721 73.096C634.041 73.096 630.698 72.504 627.69 71.32C624.682 70.136 622.105 68.44 619.961 66.232C617.849 64.024 616.202 61.352 615.018 58.216C613.866 55.08 613.289 51.56 613.289 47.656C613.289 43.784 613.866 40.28 615.018 37.144C616.202 34.008 617.849 31.352 619.961 29.176C622.105 27 624.682 25.32 627.69 24.136C630.698 22.952 634.041 22.36 637.721 22.36ZM637.721 63.976C641.817 63.976 644.842 62.6 646.794 59.848C648.778 57.096 649.769 53.064 649.769 47.752C649.769 42.44 648.778 38.392 646.794 35.608C644.842 32.824 641.817 31.432 637.721 31.432C633.561 31.432 630.473 32.84 628.457 35.656C626.473 38.44 625.482 42.472 625.482 47.752C625.482 53.032 626.473 57.064 628.457 59.848C630.473 62.6 633.561 63.976 637.721 63.976Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M682.143 29.176C683.135 28.184 684.175 27.272 685.263 26.44C686.383 25.576 687.55 24.856 688.766 24.28C690.014 23.672 691.342 23.208 692.75 22.888C694.158 22.536 695.694 22.36 697.358 22.36C700.046 22.36 702.43 22.824 704.51 23.752C706.59 24.648 708.318 25.928 709.694 27.592C711.102 29.224 712.158 31.192 712.862 33.496C713.598 35.768 713.966 38.28 713.966 41.032V72.376H702.11V41.032C702.11 38.024 701.423 35.704 700.047 34.072C698.671 32.408 696.574 31.576 693.758 31.576C691.71 31.576 689.79 32.04 687.998 32.968C686.206 33.896 684.51 35.16 682.91 36.76V72.376H671.055V23.128H678.302C679.838 23.128 680.846 23.848 681.326 25.288L682.143 29.176Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M756.97 42.088C756.97 40.552 756.746 39.112 756.298 37.768C755.882 36.392 755.242 35.192 754.378 34.168C753.514 33.144 752.41 32.344 751.066 31.768C749.754 31.16 748.218 30.856 746.458 30.856C743.034 30.856 740.33 31.832 738.346 33.784C736.394 35.736 735.146 38.504 734.602 42.088H756.97ZM734.362 49.24C734.554 51.768 735.002 53.96 735.706 55.816C736.41 57.64 737.338 59.16 738.49 60.376C739.642 61.56 741.002 62.456 742.57 63.064C744.17 63.64 745.93 63.928 747.85 63.928C749.77 63.928 751.418 63.704 752.794 63.256C754.202 62.808 755.418 62.312 756.442 61.768C757.498 61.224 758.41 60.728 759.178 60.28C759.978 59.832 760.746 59.608 761.482 59.608C762.474 59.608 763.21 59.976 763.69 60.712L767.098 65.032C765.786 66.568 764.314 67.864 762.682 68.92C761.05 69.944 759.338 70.776 757.546 71.416C755.786 72.024 753.978 72.456 752.122 72.712C750.298 72.968 748.522 73.096 746.794 73.096C743.37 73.096 740.186 72.536 737.242 71.416C734.298 70.264 731.738 68.584 729.562 66.376C727.386 64.136 725.674 61.384 724.426 58.12C723.178 54.824 722.554 51.016 722.554 46.696C722.554 43.336 723.098 40.184 724.186 37.24C725.274 34.264 726.826 31.688 728.842 29.512C730.89 27.304 733.37 25.56 736.282 24.28C739.226 23 742.538 22.36 746.218 22.36C749.322 22.36 752.186 22.856 754.81 23.848C757.434 24.84 759.69 26.296 761.578 28.216C763.466 30.104 764.938 32.44 765.994 35.224C767.082 37.976 767.626 41.128 767.626 44.68C767.626 46.472 767.434 47.688 767.05 48.328C766.666 48.936 765.93 49.24 764.842 49.24H734.362Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
            <path
              d="M787.707 31.672C789.243 28.728 791.067 26.424 793.179 24.76C795.291 23.064 797.787 22.216 800.667 22.216C802.939 22.216 804.763 22.712 806.139 23.704L805.371 32.584C805.211 33.16 804.971 33.576 804.651 33.832C804.363 34.056 803.963 34.168 803.451 34.168C802.971 34.168 802.251 34.088 801.291 33.928C800.363 33.768 799.451 33.688 798.555 33.688C797.243 33.688 796.075 33.88 795.051 34.264C794.027 34.648 793.099 35.208 792.267 35.944C791.467 36.648 790.747 37.512 790.107 38.536C789.499 39.56 788.923 40.728 788.379 42.04V72.376H776.523V23.128H783.483C784.699 23.128 785.547 23.352 786.027 23.8C786.507 24.216 786.827 24.984 786.987 26.104L787.707 31.672Z"
              stroke="#F1F1F1"
              strokeWidth="2"
              mask="url(#path-1-outside-1)"
            />
          </svg>

          <h2> Frontend Web Developer</h2>
          <div className="intro">
            I’ve always sought out opportunities and challenges that are
            meaningful to me.
          </div>
          <div className="get-in-touch">
            <Link className="btn btn-primary" to="/portfolio">
              My Projects
            </Link>
            <Link className="btn btn-secondary" to="/career">
              Career
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={developer} alt="hero"></img>
        </div>
      </div>
    </main>
  );
}