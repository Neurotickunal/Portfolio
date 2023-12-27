import React, {useContext} from "react";
import "./Intro.css";
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumb from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glasses from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Leetcode from "../../img/leetcode.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import { Link } from "react-scroll"
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I am</span>
          <span>Kunal Dutt Purohit</span>
          <span>
            Full Stack Developer in web designing and development, producting
            the Quality work
          </span>
        </div>
        <Link  to="contact" smooth={true} spy={true}> 
        <button className='i-button button'>Hire Me</button>
        </Link>
        <div className="i-icons">

            <a href="https://github.com/Neurotickunal" target="*">
            <img src={Github} alt="" />
            </a>
            <a href="">
            <img src={Instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/kunal-dutt-purohit-631503219/" target="*">
            <img src={Linkedin} alt="" />
            </a>
            <a href="https://leetcode.com/kunal007purohit/" target="*">
              <img id="leetcode" src={Leetcode} alt="" />
            </a>

        </div>
      </div>
      <div className="i-right">
      
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glasses}
          alt=""
        />
       
     

       
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{
          background:'#C1F5FF',
          top:'17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}></div>
        
         
      </div>
    </div>
  );
};

export default Intro;
