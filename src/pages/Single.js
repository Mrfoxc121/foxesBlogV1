import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
          veritatis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dicta reiciendis quos, accusamus voluptatum distinctio aliquid beatae
          aperiam dignissimos cumque cupiditate veniam tenetur inventore rerum
          blanditiis autem fuga officiis nam.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
