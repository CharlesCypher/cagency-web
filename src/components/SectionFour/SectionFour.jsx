import "./SectionFour.css";
import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionFour = () => {
  // gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const line6 = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 85% ",
  //           end: "+=500",
  //           once: true,
  //           // toggleActions: "restart none none reverse",
  //         },
  //       })
  //       .fromTo(
  //         line1.current,
  //         {
  //           opacity: 0,
  //           y: 0,
  //           rotateZ: 0,
  //           transformStyle: "preserve-3d",
  //           transformOrigin: "0",
  //           transform: 0,
  //           ease: "Power3.inOut",
  //         },
  //         {
  //           duration: 1,
  //           opacity: 1,
  //           y: 0,
  //           rotateZ: 0,
  //           transform: 0,
  //           transformStyle: "preserve-3d",
  //           ease: "Power3.inOut",
  //           stagger: {
  //             amount: 0.3,
  //           },
  //         }
  //       );
  //   });
  //   return () => ctx.revert();
  // }, []);
  return (
    <section className="section lot-section" ref={sectionRef}>
      <div className="lot-wrapper data-content">
        <div className="lottie-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 614"
            width="1440"
            height="614"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
          >
            <defs>
              <clipPath id="__lottie_element_4">
                <rect width="1440" height="614" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_4)">
              <g
                transform="matrix(0.9661378264427185,-0.2580265998840332,0.2580265998840332,0.9661378264427185,110.16899871826172,159.59800720214844)"
                opacity="1"
                style={{ display: "block" }}
                ref={line1}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-25.07200050354004,-60.327999114990234 C-25.07200050354004,-76.41000366210938 -16.788999557495117,-86.75700378417969 -5.636000156402588,-86.75700378417969 C-5.636000156402588,-86.75700378417969 -5.636000156402588,-86.72000122070312 -5.636000156402588,-86.72000122070312 C5.517000198364258,-86.72000122070312 13.800000190734863,-76.84600067138672 13.800000190734863,-60.327999114990234 C13.800000190734863,-43.810001373291016 5.517000198364258,-33.4640007019043 -5.636000156402588,-33.4640007019043 C-16.788999557495117,-33.4640007019043 -25.07200050354004,-44.24599838256836 -25.07200050354004,-60.327999114990234z M43.11800003051758,84.7020034790039 C43.11800003051758,95.84700012207031 20.41200065612793,102.01799774169922 -10.61299991607666,102.01799774169922 C-35.388999938964844,102.01799774169922 -53.9900016784668,98.31500244140625 -53.9900016784668,84.95600128173828 C-53.9900016784668,77.94999694824219 -49.04800033569336,73.81099700927734 -41.60100173950195,73.81099700927734 C-41.60100173950195,73.81099700927734 26.18899917602539,73.81099700927734 26.18899917602539,73.81099700927734 C37.34199905395508,73.81099700927734 43.11800003051758,76.8239974975586 43.11800003051758,84.7020034790039z M-46.43299865722656,-2.8610000610351562 C-33.457000732421875,0.9190000295639038 -19.986000061035156,2.7309999465942383 -6.4710001945495605,2.51200008392334 C45.625,2.51200008392334 83.2249984741211,-21.447999954223633 83.11599731445312,-60.29199981689453 C83.16200256347656,-68.48899841308594 81.177001953125,-76.57099914550781 77.33999633789062,-83.81600189208984 C86.16000366210938,-85.73899841308594 99.47100067138672,-86.63500213623047 108.49800109863281,-86.64199829101562 C108.49800109863281,-86.64199829101562 109.06500244140625,-136.7239990234375 109.06500244140625,-136.7239990234375 C88.83000183105469,-136.7239990234375 63.68000030517578,-123.89399719238281 52.527000427246094,-108.61100006103516 C34.49599838256836,-118.7249984741211 14.093000411987305,-123.8499984741211 -6.579999923706055,-123.45899963378906 C-58.2400016784668,-123.45899963378906 -95.44100189208984,-99.4990005493164 -95.44100189208984,-60.29199981689453 C-95.44100189208984,-40.03499984741211 -85.52400207519531,-24.496999740600586 -68.99400329589844,-13.605999946594238 C-88.83000183105469,-6.164000034332275 -100.41799926757812,7.448999881744385 -100.41799926757812,25.201000213623047 C-100.39399719238281,33.224998474121094 -97.81400299072266,41.034000396728516 -93.0530014038086,47.49599838256836 C-88.29199981689453,53.95800018310547 -81.59500122070312,58.736000061035156 -73.93399810791016,61.14099884033203 C-94.53299713134766,62.66600036621094 -109.06500244140625,75.58999633789062 -109.06500244140625,91.70800018310547 C-109.06500244140625,126.41400146484375 -63.47200012207031,136.7239990234375 -10.97599983215332,136.7239990234375 C48.96699905395508,136.7239990234375 104.73200225830078,115.66799926757812 104.73200225830078,69.81800079345703 C104.73200225830078,38.74300003051758 83.66100311279297,16.961000442504883 41.91899871826172,16.961000442504883 C41.91899871826172,16.961000442504883 -34.37200164794922,16.961000442504883 -34.37200164794922,16.961000442504883 C-45.525001525878906,16.961000442504883 -50.066001892089844,11.987000465393066 -50.066001892089844,5.815999984741211 C-50.16400146484375,4.189000129699707 -49.88800048828125,2.559999942779541 -49.257999420166016,1.055999994277954 C-48.62799835205078,-0.4480000138282776 -47.6609992980957,-1.7879999876022339 -46.43299865722656,-2.8610000610351562z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,299.10400390625,111.95999908447266)" opacity="1" style={{ display: "block" }} ref={line2}>
                <g opacity="1" transform="matrix(0.979395866394043,-0.20194977521896362,0.20194977521896362,0.979395866394043,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M46.55400085449219,-42.54800033569336 C61.11800003051758,-43.08000183105469 75.53900146484375,-39.492000579833984 88.18800354003906,-32.1879997253418 C88.18800354003906,-32.1879997253418 93.41600036621094,-115.63800048828125 93.41600036621094,-115.63800048828125 C83.51799774169922,-122.06800079345703 71.91100311279297,-125.2979965209961 60.145999908447266,-124.8949966430664 C45.36899948120117,-124.69400024414062 31.033000946044922,-119.78500366210938 19.184999465942383,-110.87000274658203 C7.336999893188477,-101.95500183105469 -1.4149999618530273,-89.48999786376953 -5.822000026702881,-75.25599670410156 C-5.822000026702881,-75.25599670410156 -5.822000026702881,-118.41999816894531 -5.822000026702881,-118.41999816894531 C-5.822000026702881,-118.41999816894531 -93.41600036621094,-118.41999816894531 -93.41600036621094,-118.41999816894531 C-93.41600036621094,-118.41999816894531 -93.41600036621094,124.9280014038086 -93.41600036621094,124.9280014038086 C-93.41600036621094,124.9280014038086 -5.7270002365112305,124.9280014038086 -5.7270002365112305,124.9280014038086 C-5.7270002365112305,124.9280014038086 -5.7270002365112305,13.61299991607666 -5.7270002365112305,13.61299991607666 C-5.7270002365112305,-27.297000885009766 14.093000411987305,-42.54800033569336 46.55400085449219,-42.54800033569336z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.898725152015686,0.43851232528686523,-0.43851232528686523,0.898725152015686,446.7120056152344,127.14700317382812)"
                opacity="1"
                style={{ display: "block" }}
                ref={line3}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M41.875,-0.023000000044703484 C41.875,35.17300033569336 28.930999755859375,59.29800033569336 0,59.29800033569336 C-29.430999755859375,59.29800033569336 -41.83000183105469,34.94200134277344 -41.83000183105469,-0.20800000429153442 C-41.83000183105469,-35.358001708984375 -28.930999755859375,-59.483001708984375 0,-59.483001708984375 C28.930999755859375,-59.483001708984375 41.875,-35.21900177001953 41.875,-0.023000000044703484z M-126.08000183105469,-0.023000000044703484 C-126.08000183105469,72.9520034790039 -75.43900299072266,123.3239974975586 0,123.3239974975586 C74.93900299072266,123.3239974975586 126.08000183105469,72.53700256347656 126.08000183105469,-0.023000000044703484 C126.08000183105469,-72.58300018310547 75.43900299072266,-123.3239974975586 0,-123.3239974975586 C-75.43900299072266,-123.3239974975586 -126.08000183105469,-72.99800109863281 -126.08000183105469,-0.023000000044703484z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,690.4099731445312,99.24400329589844)" opacity="1" style={{ display: "block" }} ref={line4}>
                <g opacity="1" transform="matrix(0.9988816380500793,0.04728078842163086,-0.04728078842163086,0.9988816380500793,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M57.847999572753906,12.425999641418457 C57.847999572753906,12.425999641418457 56.22200012207031,12.425999641418457 56.22200012207031,12.425999641418457 C56.22200012207031,12.425999641418457 29.636999130249023,-92.17500305175781 29.636999130249023,-92.17500305175781 C29.636999130249023,-92.17500305175781 -23.351999282836914,-92.17500305175781 -23.351999282836914,-92.17500305175781 C-23.351999282836914,-92.17500305175781 -50.082000732421875,12.425999641418457 -50.082000732421875,12.425999641418457 C-50.082000732421875,12.425999641418457 -51.707000732421875,12.425999641418457 -51.707000732421875,12.425999641418457 C-51.707000732421875,12.425999641418457 -84.5770034790039,-92.17500305175781 -84.5770034790039,-92.17500305175781 C-84.5770034790039,-92.17500305175781 -150.75100708007812,-92.17500305175781 -150.75100708007812,-92.17500305175781 C-150.75100708007812,-92.17500305175781 -92.95700073242188,92.17500305175781 -92.95700073242188,92.17500305175781 C-92.95700073242188,92.17500305175781 -27.614999771118164,92.17500305175781 -27.614999771118164,92.17500305175781 C-27.614999771118164,92.17500305175781 -0.9210000038146973,-11.989999771118164 -0.9210000038146973,-11.989999771118164 C-0.9210000038146973,-11.989999771118164 0.7400000095367432,-11.989999771118164 0.7400000095367432,-11.989999771118164 C0.7400000095367432,-11.989999771118164 27.43400001525879,92.17500305175781 27.43400001525879,92.17500305175781 C27.43400001525879,92.17500305175781 92.7770004272461,92.17500305175781 92.7770004272461,92.17500305175781 C92.7770004272461,92.17500305175781 150.75100708007812,-92.17500305175781 150.75100708007812,-92.17500305175781 C150.75100708007812,-92.17500305175781 90.71800231933594,-92.17500305175781 90.71800231933594,-92.17500305175781 C90.71800231933594,-92.17500305175781 57.847999572753906,12.425999641418457 57.847999572753906,12.425999641418457z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,846.9829711914062,276.635009765625)" opacity="1" style={{ display: "block" }} ref={line5}>
                <g opacity="1" transform="matrix(0.9678322672843933,-0.2515964210033417,0.2515964210033417,0.9678322672843933,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M73.53600311279297,16.23200035095215 C73.53600311279297,16.23200035095215 71.47100067138672,16.23200035095215 71.47100067138672,16.23200035095215 C71.47100067138672,16.23200035095215 37.63999938964844,-116.03700256347656 37.63999938964844,-116.03700256347656 C37.63999938964844,-116.03700256347656 -30.85099983215332,-117.07499694824219 -30.85099983215332,-117.07499694824219 C-30.85099983215332,-117.07499694824219 -63.66699981689453,16.23200035095215 -63.66699981689453,16.23200035095215 C-63.66699981689453,16.23200035095215 -65.73300170898438,16.23200035095215 -65.73300170898438,16.23200035095215 C-65.73300170898438,16.23200035095215 -107.55000305175781,-116.03700256347656 -107.55000305175781,-116.03700256347656 C-107.55000305175781,-116.03700256347656 -191.59800720214844,-116.03700256347656 -191.59800720214844,-116.03700256347656 C-191.59800720214844,-116.03700256347656 -118.15399932861328,117.07499694824219 -118.15399932861328,117.07499694824219 C-118.15399932861328,117.07499694824219 -35.11600112915039,117.07499694824219 -35.11600112915039,117.07499694824219 C-35.11600112915039,117.07499694824219 -1.1929999589920044,-14.642000198364258 -1.1929999589920044,-14.642000198364258 C-1.1929999589920044,-14.642000198364258 1.194000005722046,-14.642000198364258 1.194000005722046,-14.642000198364258 C1.194000005722046,-14.642000198364258 35.11600112915039,117.07499694824219 35.11600112915039,117.07499694824219 C35.11600112915039,117.07499694824219 118.15399932861328,117.07499694824219 118.15399932861328,117.07499694824219 C118.15399932861328,117.07499694824219 191.59800720214844,-116.03700256347656 191.59800720214844,-116.03700256347656 C191.59800720214844,-116.03700256347656 115.30799865722656,-116.03700256347656 115.30799865722656,-116.03700256347656 C115.30799865722656,-116.03700256347656 73.53600311279297,16.23200035095215 73.53600311279297,16.23200035095215z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.9639005064964294,-0.2662627696990967,0.2662627696990967,0.9639005064964294,1038.405029296875,115.34200286865234)"
                opacity="1"
                style={{ display: "block" }}
                ref={line6}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M35.03099822998047,137.19500732421875 C35.03099822998047,137.19500732421875 35.03099822998047,-57.06399917602539 35.03099822998047,-57.06399917602539 C35.03099822998047,-57.06399917602539 -35.03099822998047,-57.06399917602539 -35.03099822998047,-57.06399917602539 C-35.03099822998047,-57.06399917602539 -35.03099822998047,137.19500732421875 -35.03099822998047,137.19500732421875 C-35.03099822998047,137.19500732421875 35.03099822998047,137.19500732421875 35.03099822998047,137.19500732421875z M35.44900131225586,-137.19500732421875 C35.44900131225586,-137.19500732421875 -35.44900131225586,-137.19500732421875 -35.44900131225586,-137.19500732421875 C-35.44900131225586,-137.19500732421875 -35.44900131225586,-75.36499786376953 -35.44900131225586,-75.36499786376953 C-35.44900131225586,-75.36499786376953 35.44900131225586,-75.36499786376953 35.44900131225586,-75.36499786376953 C35.44900131225586,-75.36499786376953 35.44900131225586,-137.19500732421875 35.44900131225586,-137.19500732421875z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,1158.1800537109375,219.02499389648438)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.988448977470398,0.15155410766601562,-0.15155410766601562,0.988448977470398,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-71.62999725341797,-23.71299934387207 C-71.62999725341797,-23.71299934387207 -46.38999938964844,-23.71299934387207 -46.38999938964844,-23.71299934387207 C-46.38999938964844,-23.71299934387207 -46.27899932861328,65.86199951171875 -46.27899932861328,65.86199951171875 C-46.27899932861328,110.55599975585938 -16.375999450683594,123.76899719238281 15.192000389099121,123.76899719238281 C40.875999450683594,123.76899719238281 57.30799865722656,117.36799621582031 71.62999725341797,106.73699951171875 C71.62999725341797,106.73699951171875 71.62999725341797,61.819000244140625 71.62999725341797,61.819000244140625 C62.45899963378906,65.87300109863281 52.58599853515625,68.0479965209961 42.57899856567383,68.22000122070312 C28.516000747680664,68.22000122070312 21.11400032043457,61.93199920654297 21.11400032043457,45.76100158691406 C21.11400032043457,45.76100158691406 21.11400032043457,-23.676000595092773 21.11400032043457,-23.676000595092773 C21.11400032043457,-23.676000595092773 69.9280014038086,-23.676000595092773 69.9280014038086,-23.676000595092773 C69.9280014038086,-23.676000595092773 69.9280014038086,-71.36399841308594 69.9280014038086,-71.36399841308594 C69.9280014038086,-71.36399841308594 21.11400032043457,-71.36399841308594 21.11400032043457,-71.36399841308594 C21.11400032043457,-71.36399841308594 21.11400032043457,-123.76899719238281 21.11400032043457,-123.76899719238281 C21.11400032043457,-123.76899719238281 -21.854000091552734,-123.76899719238281 -21.854000091552734,-123.76899719238281 C-21.854000091552734,-123.76899719238281 -28.145000457763672,-99.06400299072266 -28.145000457763672,-99.06400299072266 C-32.91899871826172,-81.62100219726562 -38.80400085449219,-71.4020004272461 -57.75199890136719,-68.40699768066406 C-57.75199890136719,-68.40699768066406 -71.62999725341797,-66.27300262451172 -71.62999725341797,-66.27300262451172 C-71.62999725341797,-66.27300262451172 -71.62999725341797,-23.71299934387207 -71.62999725341797,-23.71299934387207z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,1326.3399658203125,132.3070068359375)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.9917988181114197,-0.12780898809432983,0.12780898809432983,0.9917988181114197,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-106.93399810791016,146.1009979248047 C-106.93399810791016,146.1009979248047 -32.74700164794922,146.1009979248047 -32.74700164794922,146.1009979248047 C-32.74700164794922,146.1009979248047 -32.74700164794922,44.297000885009766 -32.74700164794922,44.297000885009766 C-32.74700164794922,13.189000129699707 -22.683000564575195,-7.196000099182129 2.5160000324249268,-7.196000099182129 C24.97800064086914,-7.196000099182129 32.74700164794922,7.644000053405762 32.74700164794922,35.93899917602539 C32.74700164794922,35.93899917602539 32.74700164794922,146.02000427246094 32.74700164794922,146.02000427246094 C32.74700164794922,146.02000427246094 106.93399810791016,146.02000427246094 106.93399810791016,146.02000427246094 C106.93399810791016,146.02000427246094 106.93399810791016,16.166000366210938 106.93399810791016,16.166000366210938 C106.93399810791016,-26.9689998626709 89.06099700927734,-66.3949966430664 33.18899917602539,-66.3949966430664 C2.5160000324249268,-66.3949966430664 -21.757999420166016,-52.40999984741211 -32.74700164794922,-29.701000213623047 C-32.74700164794922,-29.701000213623047 -32.74700164794922,-146.1009979248047 -32.74700164794922,-146.1009979248047 C-32.74700164794922,-146.1009979248047 -106.93399810791016,-146.1009979248047 -106.93399810791016,-146.1009979248047 C-106.93399810791016,-146.1009979248047 -106.93399810791016,146.1009979248047 -106.93399810791016,146.1009979248047z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.992942750453949,0.11859460175037384,-0.11859460175037384,0.992942750453949,123.03800201416016,462.7760009765625)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-0.8370000123977661,19.80699920654297 C-30.667999267578125,19.80699920654297 -49.78900146484375,-3.1730000972747803 -49.78900146484375,-38.74800109863281 C-49.78900146484375,-38.74800109863281 -49.78900146484375,-42.016998291015625 -49.78900146484375,-42.016998291015625 C-49.78900146484375,-77.01499938964844 -30.76300048828125,-99.99400329589844 -0.8370000123977661,-99.99400329589844 C33.43899917602539,-99.99400329589844 49.215999603271484,-75.95700073242188 49.215999603271484,-40.38199996948242 C49.215999603271484,-4.807000160217285 33.43899917602539,19.80699920654297 -0.8370000123977661,19.80699920654297z M-137.8470001220703,169.125 C-137.8470001220703,169.125 -49.78900146484375,169.125 -49.78900146484375,169.125 C-49.78900146484375,169.125 -49.78900146484375,40.09400177001953 -49.78900146484375,40.09400177001953 C-37.8380012512207,68.45800018310547 -10.63700008392334,88.16799926757812 30.141000747680664,88.16799926757812 C101.41899871826172,88.16799926757812 137.8470001220703,31.200000762939453 137.8470001220703,-40.38199996948242 C137.8470001220703,-111.96399688720703 101.41899871826172,-168.88499450683594 30.18899917602539,-169.125 C-10.58899974822998,-169.125 -37.79100036621094,-149.3179931640625 -49.742000579833984,-120.4739990234375 C-49.742000579833984,-120.4739990234375 -49.742000579833984,-162.58700561523438 -49.742000579833984,-162.58700561523438 C-49.742000579833984,-162.58700561523438 -137.8470001220703,-162.58700561523438 -137.8470001220703,-162.58700561523438 C-137.8470001220703,-162.58700561523438 -137.8470001220703,169.125 -137.8470001220703,169.125z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,384.375,351.77099609375)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-17.392000198364258,21.538999557495117 C-17.392000198364258,21.538999557495117 15.383999824523926,15.565999984741211 15.383999824523926,15.565999984741211 C15.383999824523926,15.565999984741211 15.60200023651123,19.035999298095703 15.60200023651123,19.035999298095703 C15.60200023651123,48.018001556396484 -2.7709999084472656,65.01200103759766 -25.59600067138672,65.01200103759766 C-38.99399948120117,65.01200103759766 -47.941001892089844,57.50299835205078 -47.941001892089844,46.04199981689453 C-47.941001892089844,31.551000595092773 -36.72600173950195,25.53499984741211 -17.392000198364258,21.538999557495117z M107.73200225830078,62.992000579833984 C99.30899810791016,62.992000579833984 94.33300018310547,58.029998779296875 94.33300018310547,46.525001525878906 C94.33300018310547,46.525001525878906 94.33300018310547,-29.576000213623047 94.33300018310547,-29.576000213623047 C94.33300018310547,-91.53700256347656 51.12699890136719,-117.00599670410156 -7.440999984741211,-117.00599670410156 C-73.99600219726562,-117.00599670410156 -110.21900177001953,-83.06199645996094 -117.15799713134766,-34.0989990234375 C-117.15799713134766,-34.0989990234375 -42.70399856567383,-28.91699981689453 -42.70399856567383,-28.91699981689453 C-39.2130012512207,-45.38399887084961 -30.266000747680664,-56.88999938964844 -12.416000366210938,-56.88999938964844 C6.960999965667725,-56.88999938964844 15.383999824523926,-45.9109992980957 15.383999824523926,-27.423999786376953 C15.383999824523926,-27.423999786376953 15.383999824523926,-23.910999298095703 15.383999824523926,-23.910999298095703 C15.383999824523926,-23.910999298095703 -46.67599868774414,-13.416000366210938 -46.67599868774414,-13.416000366210938 C-94.81400299072266,-4.985000133514404 -125.625,13.545999526977539 -125.625,56.49300003051758 C-125.625,94.47799682617188 -97.3010025024414,116.96099853515625 -54.095001220703125,116.96099853515625 C-18.875,116.96099853515625 6.26200008392334,103.43499755859375 19.354999542236328,77.43900299072266 C26.81800079345703,102.99600219726562 48.15999984741211,116.96099853515625 75.4800033569336,116.96099853515625 C93.29199981689453,117.54399871826172 110.83499908447266,112.4749984741211 125.625,102.47000122070312 C125.625,102.47000122070312 125.625,59.52299880981445 125.625,59.52299880981445 C119.9520034790039,61.875 113.86699676513672,63.05500030517578 107.73200225830078,62.992000579833984z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,621.9940185546875,460.8609924316406)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.9998685717582703,0.016213398426771164,-0.016213398426771164,0.9998685717582703,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M6.052000045776367,81.4020004272461 C-23.187999725341797,81.4020004272461 -41.05699920654297,68.64099884033203 -44.619998931884766,46.1609992980957 C-44.619998931884766,46.1609992980957 -128.46200561523438,47.388999938964844 -128.46200561523438,47.388999938964844 C-123.11699676513672,112.95899963378906 -68.30500030517578,142.75399780273438 5.057000160217285,142.75399780273438 C80.7770004272461,142.75399780273438 128.46200561523438,109.91500091552734 128.46200561523438,52.834999084472656 C128.46200561523438,-0.027000000700354576 93.77300262451172,-27.365999221801758 34.13999938964844,-37.08399963378906 C34.13999938964844,-37.08399963378906 -17.684999465942383,-46.1609992980957 -17.684999465942383,-46.1609992980957 C-26.645999908447266,-47.388999938964844 -33.82500076293945,-52.24800109863281 -33.82500076293945,-61.37900161743164 C-33.82500076293945,-73.5 -23.08300018310547,-80.81500244140625 -4.585000038146973,-80.81500244140625 C25.231000900268555,-80.81500244140625 41.89500045776367,-68.64099884033203 45.51100158691406,-49.20500183105469 C45.51100158691406,-49.20500183105469 124.79399871826172,-51.6609992980957 124.79399871826172,-51.6609992980957 C119.39700317382812,-108.15399932861328 74.12200164794922,-142.75399780273438 -2.802999973297119,-142.75399780273438 C-77.4229965209961,-142.75399780273438 -123.3270034790039,-104.41600036621094 -123.3270034790039,-51.02000045776367 C-123.3270034790039,4.244999885559082 -89.37000274658203,25.496999740600586 -24.9689998626709,35.801998138427734 C-24.9689998626709,35.801998138427734 14.383999824523926,41.888999938964844 14.383999824523926,41.888999938964844 C32.88199996948242,44.93299865722656 38.803001403808594,51.606998443603516 38.803001403808594,62.553001403808594 C38.803001403808594,73.4990005493164 27.483999252319336,81.4020004272461 6.052000045776367,81.4020004272461z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,342.3550109863281,689.9000244140625)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.9998685717582703,0.016213398426771164,-0.016213398426771164,0.9998685717582703,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M7.133999824523926,95.94599914550781 C-27.329999923706055,95.94599914550781 -48.391998291015625,80.90399932861328 -52.59199905395508,54.40800094604492 C-52.59199905395508,54.40800094604492 -151.41400146484375,55.85599899291992 -151.41400146484375,55.85599899291992 C-145.11399841308594,133.14199829101562 -80.50900268554688,168.25999450683594 5.960000038146973,168.25999450683594 C95.20899963378906,168.25999450683594 151.41400146484375,129.5540008544922 151.41400146484375,62.275001525878906 C151.41400146484375,-0.03200000151991844 110.5260009765625,-32.255001068115234 40.23899841308594,-43.70899963378906 C40.23899841308594,-43.70899963378906 -20.844999313354492,-54.40800094604492 -20.844999313354492,-54.40800094604492 C-31.406999588012695,-55.85599899291992 -39.86899948120117,-61.58300018310547 -39.86899948120117,-72.34500122070312 C-39.86899948120117,-86.63200378417969 -27.207000732421875,-95.25399780273438 -5.4039998054504395,-95.25399780273438 C29.739999771118164,-95.25399780273438 49.380001068115234,-80.90499877929688 53.641998291015625,-57.99599838256836 C53.641998291015625,-57.99599838256836 147.09100341796875,-60.89099884033203 147.09100341796875,-60.89099884033203 C140.72900390625,-127.47799682617188 87.36499786376953,-168.25999450683594 -3.303999900817871,-168.25999450683594 C-91.25599670410156,-168.25999450683594 -145.36099243164062,-123.0719985961914 -145.36099243164062,-60.13600158691406 C-145.36099243164062,5.002999782562256 -105.33799743652344,30.052000045776367 -29.43000030517578,42.19900131225586 C-29.43000030517578,42.19900131225586 16.95400047302246,49.37300109863281 16.95400047302246,49.37300109863281 C38.75699996948242,52.959999084472656 45.736000061035156,60.827999114990234 45.736000061035156,73.7300033569336 C45.736000061035156,86.63200378417969 32.39500045776367,95.94599914550781 7.133999824523926,95.94599914550781z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,839.9520263671875,504.9779968261719)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.9538899660110474,-0.30015644431114197,0.30015644431114197,0.9538899660110474,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M4.520999908447266,60.051998138427734 C-17.378000259399414,60.051998138427734 -30.784000396728516,50.63800048828125 -33.49700164794922,34.05400085449219 C-33.49700164794922,34.05400085449219 -96.40399932861328,34.959999084472656 -96.40399932861328,34.959999084472656 C-92.35399627685547,83.33200073242188 -51.229000091552734,105.31199645996094 3.813999891281128,105.31199645996094 C60.625999450683594,105.31199645996094 96.40399932861328,81.08599853515625 96.40399932861328,38.97700119018555 C96.40399932861328,-0.019999999552965164 70.3759994506836,-20.187999725341797 25.634000778198242,-27.35700035095215 C25.634000778198242,-27.35700035095215 -13.288999557495117,-34.05400085449219 -13.288999557495117,-34.05400085449219 C-19.972999572753906,-34.959999084472656 -25.358999252319336,-38.54399871826172 -25.358999252319336,-45.279998779296875 C-25.358999252319336,-54.22200012207031 -17.299999237060547,-59.61800003051758 -3.4210000038146973,-59.61800003051758 C18.910999298095703,-59.61800003051758 31.452999114990234,-50.637001037597656 34.12699890136719,-36.29899978637695 C34.12699890136719,-36.29899978637695 93.61199951171875,-38.111000061035156 93.61199951171875,-38.111000061035156 C89.60199737548828,-79.78700256347656 55.59299850463867,-105.31199645996094 -2.0840001106262207,-105.31199645996094 C-58.06999969482422,-105.31199645996094 -92.51100158691406,-77.02899932861328 -92.51100158691406,-37.63800048828125 C-92.51100158691406,3.131999969482422 -67.03500366210938,18.809999465942383 -18.71500015258789,26.41200065612793 C-18.71500015258789,26.41200065612793 10.812000274658203,30.902000427246094 10.812000274658203,30.902000427246094 C24.650999069213867,33.14699935913086 29.132999420166016,38.071998596191406 29.132999420166016,46.14699935913086 C29.132999420166016,54.22200012207031 20.641000747680664,60.051998138427734 4.520999908447266,60.051998138427734z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(0.9960751533508301,0.08851183950901031,-0.08851183950901031,0.9960751533508301,988.0399780273438,584.6199951171875)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M48.34000015258789,191.25399780273438 C48.34000015258789,191.25399780273438 48.34000015258789,-79.54900360107422 48.34000015258789,-79.54900360107422 C48.34000015258789,-79.54900360107422 -48.34000015258789,-79.54900360107422 -48.34000015258789,-79.54900360107422 C-48.34000015258789,-79.54900360107422 -48.34000015258789,191.25399780273438 -48.34000015258789,191.25399780273438 C-48.34000015258789,191.25399780273438 48.34000015258789,191.25399780273438 48.34000015258789,191.25399780273438z M48.91699981689453,-191.25399780273438 C48.91699981689453,-191.25399780273438 -48.91699981689453,-191.25399780273438 -48.91699981689453,-191.25399780273438 C-48.91699981689453,-191.25399780273438 -48.91699981689453,-105.05999755859375 -48.91699981689453,-105.05999755859375 C-48.91699981689453,-105.05999755859375 48.91699981689453,-105.05999755859375 48.91699981689453,-105.05999755859375 C48.91699981689453,-105.05999755859375 48.91699981689453,-191.25399780273438 48.91699981689453,-191.25399780273438z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,1145.625,435.66900634765625)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M33.255001068115234,-0.017999999225139618 C33.255001068115234,27.89900016784668 22.975000381469727,47.034000396728516 0,47.034000396728516 C-23.371999740600586,47.034000396728516 -33.21900177001953,27.71500015258789 -33.21900177001953,-0.16500000655651093 C-33.21900177001953,-28.045000076293945 -22.975000381469727,-47.180999755859375 0,-47.180999755859375 C22.975000381469727,-47.180999755859375 33.255001068115234,-27.934999465942383 33.255001068115234,-0.017999999225139618z M-100.125,-0.017999999225139618 C-100.125,57.8650016784668 -59.909000396728516,97.81900024414062 0,97.81900024414062 C59.512001037597656,97.81900024414062 100.125,57.53499984741211 100.125,-0.017999999225139618 C100.125,-57.57099914550781 59.909000396728516,-97.81900024414062 0,-97.81900024414062 C-59.909000396728516,-97.81900024414062 -100.125,-57.9010009765625 -100.125,-0.017999999225139618z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,1353.3179931640625,504.4179992675781)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(0.9819554090499878,0.189112588763237,-0.189112588763237,0.9819554090499878,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M-132.10699462890625,129.49600219726562 C-132.10699462890625,129.49600219726562 -40.45500183105469,129.49600219726562 -40.45500183105469,129.49600219726562 C-40.45500183105469,129.49600219726562 -40.505001068115234,5.415999889373779 -40.505001068115234,5.415999889373779 C-40.505001068115234,-32.499000549316406 -28.023000717163086,-57.34400177001953 3.058000087738037,-57.34400177001953 C30.80699920654297,-57.34400177001953 40.40599822998047,-39.25600051879883 40.40599822998047,-4.769999980926514 C40.40599822998047,-4.769999980926514 40.40599822998047,129.39700317382812 40.40599822998047,129.39700317382812 C40.40599822998047,129.39700317382812 132.10699462890625,129.39700317382812 132.10699462890625,129.39700317382812 C132.10699462890625,129.39700317382812 132.10699462890625,-28.871000289916992 132.10699462890625,-28.871000289916992 C132.10699462890625,-81.44499969482422 110.0770034790039,-129.49600219726562 41.00199890136719,-129.49600219726562 C3.1080000400543213,-129.49600219726562 -26.878999710083008,-112.4520034790039 -40.45500183105469,-84.77400207519531 C-40.45500183105469,-84.77400207519531 -40.45500183105469,-122.63899993896484 -40.45500183105469,-122.63899993896484 C-40.45500183105469,-122.63899993896484 -132.10699462890625,-122.63899993896484 -132.10699462890625,-122.63899993896484 C-132.10699462890625,-122.63899993896484 -132.10699462890625,129.49600219726562 -132.10699462890625,129.49600219726562z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,582.375,262.22900390625)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M0,-44.770999908447266 C24.628538131713867,-44.770999908447266 44.625,-24.70911407470703 44.625,0 C44.625,24.70911407470703 24.628538131713867,44.770999908447266 0,44.770999908447266 C-24.628538131713867,44.770999908447266 -44.625,24.70911407470703 -44.625,0 C-44.625,-24.70911407470703 -24.628538131713867,-44.770999908447266 0,-44.770999908447266z"
                  ></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,907.875,67.34400177001953)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d=" M0,-44.770999908447266 C24.628538131713867,-44.770999908447266 44.625,-24.70911407470703 44.625,0 C44.625,24.70911407470703 24.628538131713867,44.770999908447266 0,44.770999908447266 C-24.628538131713867,44.770999908447266 -44.625,24.70911407470703 -44.625,0 C-44.625,-24.70911407470703 -24.628538131713867,-44.770999908447266 0,-44.770999908447266z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
