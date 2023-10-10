import Headset from './assets/Headset.png'
import Laptop from './assets/Laptop.png'
import camera from './assets/camera.png'
import Mobile from './assets/Mobile.png'
import smart_watch from './assets/smart_watch.png'

const data={
    productItems:[
        {
            id:"1",
            name: "Headset",
            cost: 1000,
            desc:"Sony Extra Bass MDR-XB450AP On-Ear Wired Headphones with Mic ",
            pic:Headset

        },
        {
            id:"2",
            name: "Laptop",
            cost: 100000,
            desc:"HP Victus Gaming Laptop, 12th Gen Intel Core i7-12650H, NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm), 75W TGP , FHD, IPS, 144Hz, 9 ms Response time, 16GB DDR4, 512GB SSD",
            pic:Laptop


        },
        {
            id:"3",
            name: "camera",
            cost: 75999,
            desc:"Canon Digital Camera EOS R50 RF-S18-45mm is STM (Black)",
            pic:camera

        },
        {
            id:"4",
            name: "Mobile ",
            cost: 99999,
            desc:"Apple iPhone 15 (128 GB) - Blue ,12MP camera, ƒ/1.9 aperture, Autofocus with, Focus Pixels, Retina Flash, Photonic Engine, Deep Fusion, Smart HDR 5",
            pic:Mobile 
        },
        {
            id:"5",
            name: "smart_watch",
            cost: 5999,
            desc:"boAt Wave Call 2 Smart Watch with 1.83 HD Display, Advanced BT Calling, DIY Watch Face Studio, Coins, 700+Active Modes, Live Cricket Scores, HR&SPO2 and Sleep Monitoring",
            pic:smart_watch
        }

    ]
}

export default data