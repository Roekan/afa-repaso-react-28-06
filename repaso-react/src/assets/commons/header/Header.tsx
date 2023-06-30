import './Header.css'
const Header = () => {

    return (
        <>
        
        <div className="box-header">
            <div className="box-title-header">
                <img className="image" src="../../../public/images/logo-project.png" alt="" />
            </div>
            <div className="box-menu">
                <a href="/useState">useState</a>
                <a href="/useEffect">useEffect</a>
                
                <a href="/project">Project3</a>
                <a href="/project">Project4</a>
            </div>
        </div>
            
        </>
    )
}

export default Header;