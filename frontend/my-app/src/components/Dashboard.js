import ipl from "./images/ipl.jpg"

const Dashboard = () => {
    return (
        <div>
            <img src={ipl} alt="ipl" className="block mx-auto mt-10 object-fill" />
            <h1 className="text-center text-2xl bold font-black">Indian Premier League</h1>
            <p className="m-5 text-wrap">The <span className="font-extrabold">Indian Premier League</span>, also known as IPL and Tata IPL for sponsorship reasons, is a men's T20 cricket league held annually in India. Founded by the BCCI in 2007, the league features ten state or city-based franchise teams.[3][4] It is the most popular and richest cricket league in the world and its seasons usually take place between March and May. It has an exclusive window in the ICC Future Tours Programme, resulting in fewer international cricket tours occurring during the IPL seasons.[5]</p>
            <p className="m-5 ">In 2014, it ranked sixth in average attendance among all sports leagues.[6] In 2010, the IPL became the first sporting event to be broadcast live on YouTube.[7][8] Inspired by the success of the IPL, other Indian sports leagues have been established.[a][11][12][13] In 2022, the league's brand value was estimated at ₹90,038 crore (US$11 billion).[14] According to the BCCI, the 2015 IPL season contributed ₹1,150 crore (US$140 million) to India's GDP.[15] In December 2022, the IPL achieved a valuation of US$10.9 billion, becoming a decacorn and registering a 75% growth in dollar terms since 2020 when it was valued at $6.2 billion, according to a report by the consulting firm D and P Advisory.[16] Its 2023 final became the most streamed live event on the internet, with 32 million viewers.[17]

                In 2023, the league sold its media rights for the next 4 seasons for US$6.4 billion to Viacom18 and Star Sports,[18] meaning each IPL match was valued at $13.4 million.[19] As of 2024, there have been seventeen seasons of the tournament. The current champions are the Kolkata Knight Riders, who won the 2024 season after defeating the Sunrisers Hyderabad in the final.[20]</p>
             <h1 className="text-center font-black text-2xl">History</h1>
             <p className="m-5">
             In 2007, Zee Entertainment Enterprises founded the Indian Cricket League (ICL).[21] The ICL was not recognized by the Board of Control for Cricket in India (BCCI) or the International Cricket Council (ICC). Moreover, the BCCI was unhappy about its committee members joining the ICL executive board.[22] In response, the BCCI increased the prize money for its domestic tournaments and imposed lifetime bans on players who joined the rival league, which it considered a rebel league.[23][24]
             </p>

        </div>
    );
};

export default Dashboard;