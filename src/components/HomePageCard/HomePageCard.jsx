import "./HomePageCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsBookmark, BsBookmarkFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme } from "../../Contexts/Index";
export const HomePageCard = () => {
  const { themeToggle } = useTheme();
  return (
    <div>
      <div className="home-card">
        <div className="home-card--container">
          <div className="home-card__header-container">
            <div className="home-card__img--container">
              <img className="home-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="home-card--userName">Saurabh Chawda</p>
            </div>
            <div className="home-card-icon--container">
              <BsThreeDotsVertical size={20} color={themeToggle === "light" ? "black" : "white"} />
            </div>
          </div>
          <hr></hr>
          <div className="home-card-Content--container">
            <p className="home-card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quibusdam voluptates beatae optio ipsa.
              Alias numquam cumque quo omnis recusandae quisquam vel velit accusamus officia doloribus quia, quos illum
              obcaecati. Autem error perspiciatis ipsa nisi, commodi totam dolorem placeat iure. Unde quae ipsum rem
              tenetur ratione? Deleniti accusantium, officiis modi, eum similique voluptas dolorem possimus deserunt
              nostrum, voluptate minus nobis. Eaque reiciendis pariatur excepturi perferendis ex porro, a explicabo
              alias labore optio vero qui similique harum facere vitae veniam iste ducimus quidem maxime incidunt
              consequatur ipsa earum? Facilis, eos reprehenderit.
            </p>
          </div>
          <hr></hr>
          <div className="home-card-footer--container">
            <div className="home-card-primary-icon--container">
              <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
              <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
              <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
            </div>
            <div className="home-card-secondary-icon--container"></div>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card--container">
          <div className="home-card__header-container">
            <div className="home-card__img--container">
              <img className="home-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="home-card--userName">Saurabh Chawda</p>
            </div>
            <div className="home-card-icon--container">
              <BsThreeDotsVertical size={20} color={themeToggle === "light" ? "black" : "white"} />
            </div>
          </div>
          <hr></hr>
          <div className="home-card-Content--container">
            <p className="home-card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quibusdam voluptates beatae optio ipsa.
              Alias numquam cumque quo omnis recusandae quisquam vel velit accusamus officia doloribus quia, quos illum
              obcaecati. Autem error perspiciatis ipsa nisi, commodi totam dolorem placeat iure. Unde quae ipsum rem
              tenetur ratione? Deleniti accusantium, officiis modi, eum similique voluptas dolorem possimus deserunt
              nostrum, voluptate minus nobis. Eaque reiciendis pariatur excepturi perferendis ex porro, a explicabo
              alias labore optio vero qui similique harum facere vitae veniam iste ducimus quidem maxime incidunt
              consequatur ipsa earum? Facilis, eos reprehenderit.
            </p>
          </div>
          <hr></hr>
          <div className="home-card-footer--container">
            <div className="home-card-primary-icon--container">
              <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
              <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
              <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
            </div>
            <div className="home-card-secondary-icon--container"></div>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card--container">
          <div className="home-card__header-container">
            <div className="home-card__img--container">
              <img className="home-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="home-card--userName">Saurabh Chawda</p>
            </div>
            <div className="home-card-icon--container">
              <BsThreeDotsVertical size={20} color={themeToggle === "light" ? "black" : "white"} />
            </div>
          </div>
          <hr></hr>
          <div className="home-card-Content--container">
            <p className="home-card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quibusdam voluptates beatae optio ipsa.
              Alias numquam cumque quo omnis recusandae quisquam vel velit accusamus officia doloribus quia, quos illum
              obcaecati. Autem error perspiciatis ipsa nisi, commodi totam dolorem placeat iure. Unde quae ipsum rem
              tenetur ratione? Deleniti accusantium, officiis modi, eum similique voluptas dolorem possimus deserunt
              nostrum, voluptate minus nobis. Eaque reiciendis pariatur excepturi perferendis ex porro, a explicabo
              alias labore optio vero qui similique harum facere vitae veniam iste ducimus quidem maxime incidunt
              consequatur ipsa earum? Facilis, eos reprehenderit.
            </p>
          </div>
          <hr></hr>
          <div className="home-card-footer--container">
            <div className="home-card-primary-icon--container">
              <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
              <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
              <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
            </div>
            <div className="home-card-secondary-icon--container"></div>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card--container">
          <div className="home-card__header-container">
            <div className="home-card__img--container">
              <img className="home-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="home-card--userName">Saurabh Chawda</p>
            </div>
            <div className="home-card-icon--container">
              <BsThreeDotsVertical size={20} color={themeToggle === "light" ? "black" : "white"} />
            </div>
          </div>
          <hr></hr>
          <div className="home-card-Content--container">
            <p className="home-card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quibusdam voluptates beatae optio ipsa.
              Alias numquam cumque quo omnis recusandae quisquam vel velit accusamus officia doloribus quia, quos illum
              obcaecati. Autem error perspiciatis ipsa nisi, commodi totam dolorem placeat iure. Unde quae ipsum rem
              tenetur ratione? Deleniti accusantium, officiis modi, eum similique voluptas dolorem possimus deserunt
              nostrum, voluptate minus nobis. Eaque reiciendis pariatur excepturi perferendis ex porro, a explicabo
              alias labore optio vero qui similique harum facere vitae veniam iste ducimus quidem maxime incidunt
              consequatur ipsa earum? Facilis, eos reprehenderit.
            </p>
          </div>
          <hr></hr>
          <div className="home-card-footer--container">
            <div className="home-card-primary-icon--container">
              <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
              <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
              <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
            </div>
            <div className="home-card-secondary-icon--container"></div>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card--container">
          <div className="home-card__header-container">
            <div className="home-card__img--container">
              <img className="home-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="home-card--userName">Saurabh Chawda</p>
            </div>
            <div className="home-card-icon--container">
              <BsThreeDotsVertical size={20} color={themeToggle === "light" ? "black" : "white"} />
            </div>
          </div>
          <hr></hr>
          <div className="home-card-Content--container">
            <p className="home-card-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quibusdam voluptates beatae optio ipsa.
              Alias numquam cumque quo omnis recusandae quisquam vel velit accusamus officia doloribus quia, quos illum
              obcaecati. Autem error perspiciatis ipsa nisi, commodi totam dolorem placeat iure. Unde quae ipsum rem
              tenetur ratione? Deleniti accusantium, officiis modi, eum similique voluptas dolorem possimus deserunt
              nostrum, voluptate minus nobis. Eaque reiciendis pariatur excepturi perferendis ex porro, a explicabo
              alias labore optio vero qui similique harum facere vitae veniam iste ducimus quidem maxime incidunt
              consequatur ipsa earum? Facilis, eos reprehenderit.
            </p>
          </div>
          <hr></hr>
          <div className="home-card-footer--container">
            <ul className="home-card-primary-icon--container">
              <li className="home-card--icon__list">
                <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
              </li>
              <li className="home-card--icon__list">
                <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
              </li>
              <li className="home-card--icon__list">
                <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
              </li>
            </ul>
            <div className="home-card-secondary-icon--container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
