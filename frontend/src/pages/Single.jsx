import React from "react";
import { Link } from "react-router-dom";
import edit from "../img/edit.png";
import delet from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="" />
            </Link>
            <img src={delet} alt="" />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, dolorum!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          reprehenderit ullam dolores enim velit modi illo repellendus minus
          unde et, at maiores itaque qui, libero vitae! Molestiae hic dolores
          quibusdam ipsam accusamus aspernatur accusantium voluptates
          exercitationem repudiandae, aliquam beatae sunt minima inventore culpa
          sequi. Ratione minima maiores temporibus ab corrupti. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Tempore possimus at iure,
          hic, dolorem doloribus porro, debitis velit quidem cum qui. Laboriosam
          culpa dolor officia iusto ipsa necessitatibus similique sunt officiis,
          est vero aut perspiciatis odio quia atque optio laudantium repudiandae
          nostrum fuga repellat et magni excepturi dolorum dolorem. Maxime
          aliquam consectetur doloremque magni officia libero quasi, odio,
          suscipit dicta ea provident veniam omnis debitis inventore quos iusto
          iste molestiae ad deserunt, eligendi numquam qui. Odit nisi distinctio
          nesciunt nulla soluta suscipit rem deserunt, deleniti fugit
          necessitatibus laborum nam alias culpa sapiente. Dicta, officiis
          perspiciatis? Voluptatem, explicabo. Praesentium, minus ex! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Autem, soluta!
          Deserunt tempora tempore, quibusdam sunt praesentium numquam quisquam
          quia ipsum cupiditate eos mollitia iure quo, cum quaerat aut autem
          pariatur possimus atque, culpa laborum! Laborum eum blanditiis, sunt
          voluptatibus quaerat accusantium ex labore? Temporibus pariatur, rem
          ad commodi ea nesciunt vero obcaecati? Ducimus itaque et, aliquid
          beatae excepturi saepe at aut ab deserunt cupiditate fugit, eaque,
          ipsam quisquam dolorum repudiandae suscipit iusto exercitationem
          accusantium? Repudiandae deserunt sequi possimus at doloremque fugit,
          ut recusandae natus esse delectus illo odio est similique, hic et
          nesciunt laudantium, omnis unde dolore odit praesentium laboriosam.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
