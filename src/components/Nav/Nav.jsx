import "./Nav.css";
import Button from "../CTA/Button";
import Ticker from "../Ticker/Ticker";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

const Nav = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        [line1.current, line2.current, line3.current, line4.current],
        {
          duration: 2,
          opacity: 0,
          x: 0,
          y: 120,
          rotateZ: 3.3,
          transformStyle: "preserve-3d",
          ease: "Power3.inOut",
        },
        { duration: 1.1, opacity: 1, x: 0, y: 0, rotateZ: 0, transformStyle: "preserve-3d", ease: "Power3.inOut", delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll(".section")];
    let options = {
      rootMargin: "0px",
      threshold: 0.75,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.75) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <header className="cagency-header">
      <nav role="navigation" className="cagency-navbar">
        <div className="container container-nav">
          <Link href="/" className="logo">
            Cagency
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 528 528"
            width="528"
            height="528"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
          >
            <defs>
              <clipPath id="__lottie_element_78">
                <rect width="528" height="528" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_78)">
              <g transform="matrix(1,0,0,1,264,264)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="1"
                    strokeWidth="9.846"
                    d=" M256,0 C256,0 256,0 256,0 C256,141.28640747070312 141.28640747070312,256 0,256 C0,256 0,256 0,256 C-141.28640747070312,256 -256,141.28640747070312 -256,0 C-256,0 -256,0 -256,0 C-256,-141.28640747070312 -141.28640747070312,-256 0,-256 C0,-256 0,-256 0,-256 C141.28640747070312,-256 256,-141.28640747070312 256,0z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,-1,267.4230041503906,330.1199951171875)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-40.16299819946289,9.480999946594238 C-38.71200180053711,9.635000228881836 -32.619998931884766,9.940999984741211 -28.131000518798828,10.07800006866455 C-24.222999572753906,10.196999549865723 10.918000221252441,10.01099967956543 14.53600025177002,9.857000350952148 C27.864999771118164,9.243000030517578 36.090999603271484,8.440999984741211 45.9379997253418,6.76800012588501 C53.755001068115234,5.436999797821045 62.91899871826172,3.609999895095825 66.16200256347656,2.740000009536743 C69.37100219726562,1.8530000448226929 72.97200012207031,0.26499998569488525 73.34700012207031,-0.4350000023841858 C73.56900024414062,-0.8619999885559082 73.48400115966797,-3.0460000038146973 73.21099853515625,-3.558000087738037 C73.10900115966797,-3.746000051498413 72.78399658203125,-4.445000171661377 72.47699737548828,-5.127999782562256 C71.18000030517578,-7.960999965667725 68.51699829101562,-9.395000457763672 63.55099868774414,-9.940999984741211 C60.27399826049805,-10.315999984741211 48.770999908447266,-10.07699966430664 34.1619987487793,-9.343000411987305 C32.847999572753906,-9.274999618530273 14.722999572753906,-9.206999778747559 -6.114999771118164,-9.1899995803833 C-26.93600082397461,-9.156000137329102 -44.53200149536133,-9.086999893188477 -45.198001861572266,-9.019000053405762 C-47.1609992980957,-8.831000328063965 -52.29800033569336,-7.942999839782715 -55.165000915527344,-7.311999797821045 C-62.60599899291992,-5.638999938964844 -69.6719970703125,-3.2669999599456787 -72.04399871826172,-1.6460000276565552 C-73.06800079345703,-0.9459999799728394 -73.68199920654297,0.026000000536441803 -73.40899658203125,0.5040000081062317 C-72.76000213623047,1.6820000410079956 -67.4520034790039,3.5929999351501465 -57.9119987487793,6.1020002365112305 C-51.27299880981445,7.8429999351501465 -45.65800094604492,8.918000221252441 -40.16299819946289,9.480999946594238z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,-1,265.47100830078125,261.7149963378906)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-52.375999450683594,8.217000007629395 C-46.84600067138672,8.66100025177002 -20.37700080871582,9.871999740600586 -9.710000038146973,10.161999702453613 C-1.6720000505447388,10.383999824523926 8.73900032043457,10.196000099182129 17.937999725341797,9.684000015258789 C27.052000045776367,9.154999732971191 50.46699905395508,7.431000232696533 56.082000732421875,6.85099983215332 C66.18499755859375,5.827000141143799 72.53399658203125,4.632999897003174 75.55500030517578,3.1649999618530273 C77.2959976196289,2.3289999961853027 77.39800262451172,2.191999912261963 77.27899932861328,0.7070000171661377 C77.21099853515625,-0.027000000700354576 77.07499694824219,-0.6240000128746033 76.90399932861328,-0.7950000166893005 C76.76699829101562,-0.9660000205039978 76.64700317382812,-1.2380000352859497 76.62999725341797,-1.4259999990463257 C76.62999725341797,-1.597000002861023 76.3740005493164,-2.2109999656677246 76.08399963378906,-2.7739999294281006 C75.63999938964844,-3.5759999752044678 75.38400268554688,-3.867000102996826 74.75299835205078,-4.190999984741211 C72.80699920654297,-5.181000232696533 66.45899963378906,-5.8979997634887695 56.25299835205078,-6.2729997634887695 C53.625,-6.375 41.37099838256836,-6.53000020980835 29.031999588012695,-6.631999969482422 C16.69300079345703,-6.7170000076293945 6.059999942779541,-6.836999893188477 5.394000053405762,-6.870999813079834 C4.744999885559082,-6.921999931335449 2.236999988555908,-7.025000095367432 -0.15199999511241913,-7.126999855041504 C-2.5409998893737793,-7.229000091552734 -8.567000389099121,-7.535999774932861 -13.550000190734863,-7.809000015258789 C-18.516000747680664,-8.098999977111816 -27.424999237060547,-8.595000267028809 -33.34700012207031,-8.918999671936035 C-39.25199890136719,-9.243000030517578 -45.94200134277344,-9.635000228881836 -48.19499969482422,-9.772000312805176 C-59.25400161743164,-10.454999923706055 -59.44200134277344,-10.454999923706055 -63.29899978637695,-9.49899959564209 C-66.61000061035156,-8.680000305175781 -71.61100006103516,-6.7170000076293945 -73.93199920654297,-5.300000190734863 C-78.31800079345703,-2.671999931335449 -78.41999816894531,-0.7440000176429749 -74.34100341796875,2.0380001068115234 C-71.74700164794922,3.812999963760376 -69.30599975585938,4.940000057220459 -66.19999694824219,5.742000102996826 C-65.20999908447266,6.014999866485596 -63.7599983215332,6.4070000648498535 -62.95800018310547,6.629000186920166 C-60.893001556396484,7.22599983215332 -56.48899841308594,7.89300012588501 -52.375999450683594,8.217000007629395z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,-1,268.47198486328125,187.70899963378906)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-51.02899932861328,7.468999862670898 C-45.481998443603516,7.623000144958496 -38.775001525878906,7.810999870300293 -36.09600067138672,7.879000186920166 C-29.986000061035156,8.067000389099121 -7.321000099182129,7.964000225067139 -2.6449999809265137,7.742000102996826 C6.076000213623047,7.297999858856201 13.072999954223633,6.666999816894531 22.44300079345703,5.50600004196167 C29.33799934387207,4.6529998779296875 40.448001861572266,3.065000057220459 47.53099822998047,1.9220000505447388 C52.189998626708984,1.1710000038146973 56.268001556396484,0.5230000019073486 64.34100341796875,-0.7400000095367432 C65.48400115966797,-0.9279999732971191 67.3280029296875,-1.0470000505447388 69.03500366210938,-1.0640000104904175 C70.69000244140625,-1.0809999704360962 72.03900146484375,-1.1670000553131104 72.3290023803711,-1.2860000133514404 C72.73899841308594,-1.4570000171661377 72.78900146484375,-1.5759999752044678 72.78900146484375,-2.242000102996826 C72.78900146484375,-2.6689999103546143 72.7040023803711,-3.2149999141693115 72.58499908447266,-3.48799991607666 C72.48300170898438,-3.74399995803833 72.39700317382812,-4 72.41400146484375,-4.051000118255615 C72.41400146484375,-4.1020002365112305 72.22599792480469,-4.5289998054504395 71.97000122070312,-4.989999771118164 C70.84400177001953,-7.072000026702881 67.63500213623047,-7.97599983215332 61.439998626708984,-7.97599983215332 C57.44599914550781,-7.97599983215332 53.606998443603516,-7.789000034332275 41.89899826049805,-7.038000106811523 C22.562000274658203,-5.791999816894531 12.065999984741211,-5.416999816894531 0,-5.535999774932861 C-11.178999900817871,-5.638000011444092 -19.31999969482422,-5.894000053405762 -35.499000549316406,-6.696000099182129 C-47.42900085449219,-7.276000022888184 -52.37799835205078,-7.465000152587891 -57.599998474121094,-7.499000072479248 C-61.9010009765625,-7.550000190734863 -62.17399978637695,-7.5320000648498535 -63.249000549316406,-7.1570000648498535 C-65.45099639892578,-6.406000137329102 -70.27999877929688,-3.0439999103546143 -71.44100189208984,-1.440000057220459 C-72.24299621582031,-0.3310000002384186 -72.78900146484375,0.8299999833106995 -72.78900146484375,1.4609999656677246 C-72.78900146484375,2.1610000133514404 -72.03900146484375,3.3559999465942383 -71.13400268554688,4.090000152587891 C-69.5979995727539,5.318999767303467 -67.63500213623047,5.949999809265137 -62.0369987487793,7.025000095367432 C-61.525001525878906,7.126999855041504 -56.558998107910156,7.331999778747559 -51.02899932861328,7.468999862670898z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,266.35400390625,268.23699951171875)"
                opacity="0.0013706385658636244"
                style={{ display: "none" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-14.755000114440918,22.61400032043457 C-6.613999843597412,15.616999626159668 -1.4620000123977661,10.708000183105469 -1.2910000085830688,10.708000183105469 C-1.2910000085830688,10.708000183105469 7.066999912261963,2.177000045776367 7.066999912261963,2.177000045776367 C7.084000110626221,2.0920000076293945 11.067000389099121,-0.5630000233650208 12.687999725341797,-2.2009999752044678 C15.982000350952148,-5.563000202178955 16.822999954223633,-7.869999885559082 20.816999435424805,-12.13700008392334 C26.36400032043457,-18.076000213623047 24.58300018310547,-18.913000106811523 32.433998107910156,-26.31999969482422 C42.81100082397461,-36.11600112915039 38.10900115966797,-31.63599967956543 42.66600036621094,-37.301998138427734 C45.2599983215332,-40.54499816894531 47.30799865722656,-42.95100021362305 49.099998474121094,-44.880001068115234 C50.65299987792969,-46.553001403808594 51.268001556396484,-47.611000061035156 51.625999450683594,-49.231998443603516 C51.98400115966797,-50.78499984741211 51.89899826049805,-52.935001373291016 51.45500183105469,-53.60100173950195 C51.284000396728516,-53.856998443603516 51.19900131225586,-54.09600067138672 51.233001708984375,-54.14699935913086 C51.369998931884766,-54.284000396728516 50.55099868774414,-55.78499984741211 50.124000549316406,-56.19499969482422 C49.645999908447266,-56.65599822998047 48.60499954223633,-56.89500045776367 47.66600036621094,-56.757999420166016 C46.55699920654297,-56.604000091552734 44.696998596191406,-55.30799865722656 41.659000396728516,-52.542999267578125 C40.84000015258789,-51.808998107910156 39.79800033569336,-50.87099838256836 39.31999969482422,-50.444000244140625 C36.00899887084961,-47.4739990234375 43.25600051879883,-55.30799865722656 37.96500015258789,-49.36899948120117 C32.417999267578125,-43.13999938964844 34.722999572753906,-46.01499938964844 24.142000198364258,-35.31399917602539 C13.100000381469727,-24.118000030517578 16.753000259399414,-27.84600067138672 10.79699993133545,-21.29199981689453 C6.513000011444092,-16.582000732421875 3.5769999027252197,-13.440999984741211 3.4579999446868896,-13.440999984741211 C3.4579999446868896,-13.440999984741211 -8.48900032043457,-1.1019999980926514 -8.48900032043457,-1.1019999980926514 C-8.48900032043457,-1.1019999980926514 -11.527000427246094,1.781999945640564 -11.527000427246094,1.781999945640564 C-13.182000160217285,3.36899995803833 -16.85099983215332,6.800000190734863 -19.66699981689453,9.41100025177002 C-25.844999313354492,15.145000457763672 -38.755001068115234,24.941999435424805 -43.4379997253418,30.707000732421875 C-50.64099884033203,39.57400131225586 -49.58000183105469,37.54100036621094 -51.40399932861328,41.165000915527344 C-52.13800048828125,42.62300109863281 -53.47999954223633,44.09299850463867 -53.96900177001953,45.393001556396484 C-55.237998962402344,48.76599884033203 -55.38399887084961,50.83300018310547 -55.38399887084961,51.84000015258789 C-55.38399887084961,52.30099868774414 -55.29899978637695,52.38600158691406 -54.736000061035156,52.540000915527344 C-53.472999572753906,52.89799880981445 -53.06800079345703,52.266998291015625 -51.470001220703125,52.034000396728516 C-49.66899871826172,51.77199935913086 -51.417999267578125,52.09700012207031 -44.553001403808594,49.630001068115234 C-40.917999267578125,48.32400131225586 -40.696998596191406,46.77799987792969 -38.98899841308594,45.159000396728516 C-30.790000915527344,37.38800048828125 -27.33300018310547,33.87799835205078 -22.434999465942383,29.388999938964844 C-21.035999298095703,28.108999252319336 -17.110000610351562,24.645000457763672 -14.755000114440918,22.61400032043457z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.6946583986282349,0.7193397879600525,0.7193397879600525,-0.6946583986282349,266.5429992675781,264.7139892578125)"
                opacity="0.0013706385658636244"
                style={{ display: "none" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M49.35499954223633,49.12699890136719 C50.49800109863281,49.74100112915039 51.4379997253418,50.40700149536133 51.95000076293945,50.93600082397461 C52.87200164794922,51.92599868774414 53.5359992980957,52.04499816894531 54.21900177001953,51.345001220703125 C54.57699966430664,51.00400161743164 54.645999908447266,50.76499938964844 54.645999908447266,49.97999954223633 C54.645999908447266,48.819000244140625 59.507999420166016,45.323001861572266 58.53499984741211,43.47999954223633 C57.459999084472656,41.43199920654297 56.060001373291016,39.65800094604492 51.2130012512207,34.12799835205078 C49.81399917602539,32.54100036621094 47.321998596191406,29.53700065612793 45.683998107910156,27.472000122070312 C42.20199966430664,23.086000442504883 41.79600143432617,23.61400032043457 38.22800064086914,19.974000930786133 C32.10499954223633,13.72599983215332 36.327999114990234,17.773000717163086 31.624000549316406,13.225000381469727 C29.145000457763672,10.82800006866455 27.305999755859375,8.206999778747559 27.016000747680664,7.866000175476074 C25.770000457763672,6.3470001220703125 22.6560001373291,3.7170000076293945 21.291000366210938,2.180999994277954 C20.472000122070312,1.2419999837875366 18.679000854492188,-0.7200000286102295 17.31399917602539,-2.187999963760376 C15.965999603271484,-3.6730000972747803 14.857000350952148,-4.935999870300293 14.87399959564209,-5.004000186920166 C14.87399959564209,-5.004000186920166 7.552000045776367,-12.666999816894531 7.552000045776367,-12.666999816894531 C7.484000205993652,-12.666999816894531 0.7590000033378601,-19.305999755859375 -7.415999889373779,-27.43000030517578 C-21.27400016784668,-41.23699951171875 -21.770999908447266,-46.71699905395508 -32.03799819946289,-53.266998291015625 C-35.37099838256836,-55.39400100708008 -36.46699905395508,-57.95899963378906 -38.310001373291016,-59.137001037597656 C-41.04100036621094,-60.89500045776367 -44.04399871826172,-60.742000579833984 -46.48500061035156,-58.72800064086914 C-47.03099822998047,-58.266998291015625 -47.492000579833984,-57.805999755859375 -47.492000579833984,-57.72100067138672 C-47.492000579833984,-57.63600158691406 -47.749000549316406,-57.12300109863281 -48.073001861572266,-56.57699966430664 C-48.840999603271484,-55.279998779296875 -48.547000885009766,-54.94900131225586 -48.44499969482422,-52.6619987487793 C-48.34299850463867,-50.69900131225586 -47.301998138427734,-49.78200149536133 -46.43199920654297,-48.12699890136719 C-45.86899948120117,-47.08599853515625 -44.19499969482422,-45.698001861572266 -40.68899917602539,-40.505001068115234 C-36.792999267578125,-34.733001708984375 -41.37300109863281,-40.279998779296875 -33.35200119018555,-31.14900016784668 C-27.719999313354492,-24.71500015258789 -36.25699996948242,-32.56399917602539 -30.761999130249023,-26.898000717163086 C-28.117000579833984,-24.18400001525879 -25.165000915527344,-21.11199951171875 -24.174999237060547,-20.070999145507812 C-23.20199966430664,-19.047000885009766 -20.18199920654297,-15.923999786376953 -17.485000610351562,-13.142000198364258 C-17.485000610351562,-13.142000198364258 -12.569000244140625,-8.072999954223633 -12.569000244140625,-8.072999954223633 C-12.569000244140625,-8.072999954223633 -5.72599983215332,-1.2120000123977661 -5.72599983215332,-1.2120000123977661 C-5.520999908447266,-1.2120000123977661 -1.715000033378601,2.5250000953674316 8.42300033569336,12.696999549865723 C15.76200008392334,20.06999969482422 19.584999084472656,23.773000717163086 25.83099937438965,29.593000411987305 C27.844999313354492,31.469999313354492 22.184999465942383,25.284000396728516 27.253999710083008,30.3700008392334 C36.624000549316406,39.75699996948242 38.58700180053711,41.566001892089844 42.71699905395508,44.68899917602539 C45.77199935913086,46.99300003051758 47.20500183105469,47.94900131225586 49.35499954223633,49.12699890136719z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </nav>
      <div className="main-overlay"></div>
      <div className="section hero-wrapper relative">
        <div className="container hero-header-wrapper desktop data-content">
          <div className="cropper-heading">
            <div className="text-wrapper" ref={line1}>
              <h1 className="hero-h1">PURSUE YOUR GOAL</h1>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper" ref={line2}>
              <h1 className="hero-h1">ENJOY YOUR COFFEE</h1>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper" ref={line3}>
              <h1 className="hero-h1">WE’LL DO THE REST</h1>
            </div>
          </div>
        </div>
        <div className="hero-header-wrapper mobile">
          <div className="cropper-heading">
            <div className="text-wrapper" ref={line4}>
              <h1 className="hero-h1">PURSUE YOUR GOAL, ENJOY YOUR COFFEE, WE’LL DO THE REST</h1>
            </div>
          </div>
        </div>
        <Button />
        <Ticker />
      </div>
    </header>
  );
};

export default Nav;
