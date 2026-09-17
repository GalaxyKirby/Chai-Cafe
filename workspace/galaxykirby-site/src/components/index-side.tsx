import '../css/index.css'

export default function IndexSide(
    {image1, image2, image3, image4, 
            name1, name2, name3, name4}:
    {image1: string, image2: string, image3: string, image4: string, 
            name1: string, name2: string, name3: string, name4: string}
) {
    return (
        <>
            <div className="index-side">
                <div className="side-img-container">
                    <img className="side-img" src={image1}/>
                    <h3 className="image-subheader">{name1}</h3>
                </div>
                <div className="side-img-container">
                    <img className="side-img" src={image2}/>
                    <h3 className="image-subheader">{name2}</h3>
                </div>
                <div className="side-img-container">
                    <img className="side-img" src={image3}/>
                    <h3 className="image-subheader">{name3}</h3>
                </div>
                <div className="side-img-container">
                    <img className="side-img" src={image4}/>
                    <h3 className="image-subheader">{name4}</h3>
                </div>
            </div>
        </>
    )
}