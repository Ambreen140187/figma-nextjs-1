import Link from "next/link";
interface Headerprops{
  font:
  {
    className:string
  }
}

export default function Header({font}:Headerprops) {
    return (
      <> 
      <div className="link-parant">    
      <div className={`${font.className}link-parant`}>
        <ul className="links">
          <li className="link"><Link href="">Work</Link></li>
          <li className="link"><Link href="">Blog</Link></li>
          <li className="link"><Link href="">Contact</Link></li>


        </ul>

        


        
      </div>
      </div>
     </>
    );
  }
  