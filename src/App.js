import './App.css';
import gambar from './img/img2.jpg';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="App-header">
    
    <div className="container">
      <Navbar light expand="md">
        <NavbarBrand>Morris IF'21</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Instagram
                </DropdownItem>
                <DropdownItem>
                  Twitter
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
    <div id="runningtext" class="runningtext">
          <marquee  >
         <font face="Gill Sans" size="5" color="black">Selamat Datang di Website Saya!</font></marquee>
    </div>
    
    <div className="container">
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="title">Dalam website saya ini, saya akan memberikan materi mengenai network</p>
        <hr className="my-3" />
        <p>Morris IF'21</p>
        <hr className="my-3" />
      </Jumbotron>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L0,224L40,224L40,96L80,96L80,128L120,128L120,64L160,64L160,288L200,288L200,64L240,64L240,32L280,32L280,192L320,192L320,32L360,32L360,64L400,64L400,32L440,32L440,64L480,64L480,64L520,64L520,160L560,160L560,256L600,256L600,128L640,128L640,96L680,96L680,256L720,256L720,128L760,128L760,32L800,32L800,160L840,160L840,224L880,224L880,96L920,96L920,192L960,192L960,160L1000,160L1000,96L1040,96L1040,128L1080,128L1080,128L1120,128L1120,192L1160,192L1160,32L1200,32L1200,192L1240,192L1240,32L1280,32L1280,288L1320,288L1320,288L1360,288L1360,256L1400,256L1400,128L1440,128L1440,0L1400,0L1400,0L1360,0L1360,0L1320,0L1320,0L1280,0L1280,0L1240,0L1240,0L1200,0L1200,0L1160,0L1160,0L1120,0L1120,0L1080,0L1080,0L1040,0L1040,0L1000,0L1000,0L960,0L960,0L920,0L920,0L880,0L880,0L840,0L840,0L800,0L800,0L760,0L760,0L720,0L720,0L680,0L680,0L640,0L640,0L600,0L600,0L560,0L560,0L520,0L520,0L480,0L480,0L440,0L440,0L400,0L400,0L360,0L360,0L320,0L320,0L280,0L280,0L240,0L240,0L200,0L200,0L160,0L160,0L120,0L120,0L80,0L80,0L40,0L40,0L0,0L0,0Z"></path></svg>
    
    <div className="h1">
      <h1>Network</h1>
    </div>
    <p className="gambar">
      <img src={gambar} className="App-logo" alt="logo" />
    </p>

    <div className="container">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="definisi">Definisi Jaringan Komputer</h1>
          <hr className="my-3" />
          <p className="lead">Jaringan Komputer adalah sebuah sistem yang terdiri dari dua atau lebih komputer yang saling terhubung satu sama lain melalui media transmisi dan media komunikasi sehingga dapat saling berbagi data aplikasi maupun berbagi perangkat keras komputer.</p>
          <hr className="my-3" />
        </Container>
      </Jumbotron>
    </div>

    <div className="container">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="definisi">Layer Osi</h1>
          <hr className="my-3" />
          <p className="lead">OSI (Open System Interconnection) merupakan sebuah konsep yang terdiri dari 7 layer yang setiap layer tersebut memiliki fungsi yang spesifik, sehingga setiap tugas yang diberikan dapat diimplementasikan secara independen.</p>
          <hr className="my-3" />
          <p className="lead">Layer OSI memiliki 7 layer : </p>
          <p className="lead">1. Application Layer</p>
          <p className="lead">2. Presentation Layer</p>
          <p className="lead">3. Session Layer</p>
          <p className="lead">4. Transport Layer</p>
          <p className="lead">5. Network Layer</p>
          <p className="lead">6. Data-Link Layer</p>
          <p className="lead">7. Physical Layer</p>
          <hr className="my-3" />
        </Container>
      </Jumbotron>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="3" className="container">
          <h1 className="h1">Mac Address</h1>
          <hr className="my-3" />
          <p className="lead">Media Access Control (MAC) merupakan sebuah alamat unik yang memiliki panjang 48 bit. Bisa juga disebut dalam alamat fisik karena dapat mengidentifikasi sebuah komputer, device dan lain – lain.</p>
        </Col>
        <Col  xs="7" sm="3" className="container">
          <h1 className="h1">IP Address</h1>
          <hr className="my-3" />
          <p className="lead">Internet Protocol Address (IP Address) adalah label numerik yang ditetapkan untuk setiap perangkat yang terhubung ke jaringan komputer yang menggunakan protocol internet untuk komunikasi.</p>
        </Col>
        <Col xs="7" sm="3" className="container">
          <h1 className="h1">Kelas Dalam IP Address</h1>
          <hr className="my-3" />
          <p className="lead">Media Access Control (MAC) merupakan sebuah alamat unik yang memiliki panjang 48 bit. Bisa juga disebut dalam alamat fisik karena dapat mengidentifikasi sebuah komputer, device dan lain – lain.</p>
          <p className="lead">1. Kelas A</p>
          <p className="lead">2. Kelas B</p>
          <p className="lead">3. Kelas C</p>
          <p className="lead">4. Kelas D</p>
          <p className="lead">5. Kelas E</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">IP Network</h1>
          <hr className="my-3" />
          <p className="lead">IP Ini berada di awal dalam jaringan, perannya ialah memberi host untuk menyediakan kemampuan berkomunikasi dengan orang lain.</p>
        </Col>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">IP Broadcast</h1>
          <hr className="my-3" />
          <p className="lead">IP Broadcast adalah sebuah IP yang dapat memungkinkan sebuah jaringan melakukan siaran ke seluruh jaringan.</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">IP Host</h1>
          <hr className="my-3" />
          <p className="lead">IP ini merupakan sebuah IP yang unik dan memungkinkan berkomunikasi satu ke satu dan dengan jaringan, biasanya yang mendapat ip tersebut seperti end device (Komputer, HP, Laptop, dsb).</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">IP Gateaway</h1>
          <hr className="my-3" />
          <p className="lead">IP ini digunakan untuk menghubungkan jaringan Lokal / LAN ke jaringan lain maupun ke jaringan publik. Biasanya IP gateway digunakan pada router untuk me-routing IP Jaringan yang satu terhadap jaringan yang lain.</p>
        </Col>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">Subnetting</h1>
          <hr className="my-3" />
          <p className="lead">Subnetting merupakan sebuah kiat untuk memisahkan satu jaringan fisik menjadi lebih dari satu sub-jaringan yang lebih kecil. Fungsinya antara lain dapat mengefisiensi penggunaan alamat IP, mengurangi traffic jaringan serta mengoptimalisasi kinerja dan kecepatan jaringan.</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
      <Col xs="7" sm="3" className="container">
          <h1 className="h1">Subnet Mask</h1>
          <hr className="my-3" />
          <p className="lead">Subnet Mask merupakan sebuah teknik khusus untuk memecah atau membagi jaringan komputer sehingga menjadi subnetwork-subnetwork dengan ukuran yang lebih kecil. Kegiatan ini dinamakan subnetting dan hanya bisa dilakukan terhadap IP Address kelas A, B dan C saja.</p>
        </Col>
        <Col  xs="7" sm="3" className="container">
          <h1 className="h1">Prefix</h1>
          <hr className="my-3" />
          <p className="lead">Berfungsi sebagai penunjuk berapa banyak bit dari sebuah IP Address yang merupakan porsi Network-ID. Contoh 192.168.12.20 /24. /24 ini artinya subnet mask nya mempunyai nilai 255.255.255.000 </p>
        </Col>
        <Col  xs="7" sm="3" className="container">
          <h1 className="h1">Range Host</h1>
          <hr className="my-3" />
          <p className="lead">Jika sudah melakukan subnetting, akan ada host yang tidak bisa digunakan. Rumus yang dapat digunakan : Jumlah host – (1 Network ID + 1 Broadcast ID) Jumlah host – 2 = x</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">HTTP</h1>
          <hr className="my-3" />
          <p className="lead">Hypertext transfer protocol ialah sebuah protokol yang dimana ia mengatur untuk berjalan nya proses dalam menampilkan halaman web.</p>
        </Col>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">FTP</h1>
          <hr className="my-3" />
          <p className="lead">File Transfer Protocol adalah sebuah protokol yang dimana berlangsungnya unggah maupun unduh file pada browser maupun komputer.</p>
        </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">DNS</h1>
          <hr className="my-3" />
          <p className="lead">Domain Name System ialah sebuah protokol penghubung URL dengan IP address</p>
        </Col>
        <Col xs="7" sm="4" className="container">
          <h1 className="h1">DHCP</h1>
          <hr className="my-3" />
          <p className="lead">Dynamic Host Configuration Protocol merupakan protokol yang akan memberikan IP secara dinamis, artinya tidak perlu melakukan konfigurasi dengan ip static, melainkan server akan mengirimkan ip yang tidak digunakan untuk host yang membutuhkan.</p>
        </Col>
      </Row>
    </div>

    <div className="container">
      <Jumbotron>
        <h1 className="display-3">Sekian</h1>
        <p className="title">Valen Rionald</p>
        <hr className="my-3" />
        <p>Waymo</p>
        <hr className="my-3" />
      </Jumbotron>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L0,224L40,224L40,96L80,96L80,128L120,128L120,64L160,64L160,288L200,288L200,64L240,64L240,32L280,32L280,192L320,192L320,32L360,32L360,64L400,64L400,32L440,32L440,64L480,64L480,64L520,64L520,160L560,160L560,256L600,256L600,128L640,128L640,96L680,96L680,256L720,256L720,128L760,128L760,32L800,32L800,160L840,160L840,224L880,224L880,96L920,96L920,192L960,192L960,160L1000,160L1000,96L1040,96L1040,128L1080,128L1080,128L1120,128L1120,192L1160,192L1160,32L1200,32L1200,192L1240,192L1240,32L1280,32L1280,288L1320,288L1320,288L1360,288L1360,256L1400,256L1400,128L1440,128L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"></path></svg>
    </header>
  );
}

export default App;