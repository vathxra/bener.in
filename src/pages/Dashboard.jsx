import { Col, Container, Row } from "react-bootstrap";
import MenuCard from "../components/MenuCard/MenuCard";
import ImgPanggilMekanik from "../assets/images/icons/panggil-mekanik.png";
import ImgJadwalkanServis from "../assets/images/icons/jadwalkan-servis.png";
import ImgGarasi from "../assets/images/icons/garasi.png";
import ImgRiwayatServis from "../assets/images/icons/riwayat-servis.png";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { currentUser } = useAuth();
    const menus = [
        {
            id: 1,
            img: ImgPanggilMekanik,
            title: "Panggil Mekanik",
            link: "/order/panggil-mekanik",
        },
        {
            id: 2,
            img: ImgJadwalkanServis,
            title: "Jadwalkan Servis",
            link: "/order/jadwalkan-servis",
        },
        {
            id: 3,
            img: ImgGarasi,
            title: "Garasi",
            link: "/garasi",
        },
        {
            id: 4,
            img: ImgRiwayatServis,
            title: "Riwayat Servis",
            link: "/order/riwayat-servis",
        },
    ];
    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 vh-100 flex-column">
                {currentUser ? (
                    <>
                        <h5 className="text-center">Welcome, {currentUser.email}</h5>
                    </>
                ) : (
                    <>
                        <h1>welcome</h1>
                    </>
                )}

                <Container>
                    <Row>
                        {menus.map((menu) => {
                            return (
                                <Col xs={6} className="mt-3" key={menu.id}>
                                    <MenuCard title={menu.title} img={menu.img} link={menu.link} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Dashboard;
