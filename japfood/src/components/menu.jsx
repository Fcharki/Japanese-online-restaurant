import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import gyoza from "../assets/food/gyoza.jpg";
import Kashipan from "../assets/food/kashipan.jpg";
import ms from "../assets/food/misoSoup.jpg";
import nikujaga from "../assets/food/nikujaga.jpg";
import natto from "../assets/food/nrb.jpg";
import pancake from "../assets/food/onigiri.jpg";
import Onigiri from "../assets/food/nrb.jpg";
import ramen from "../assets/food/ramen.jpg";
import Sashimi from "../assets/food/sashimi.jpg";
import Sukiyaki from "../assets/food/sukiyaki.jpg";
import sushi from "../assets/food/sushi.jpg";
import takoyaki from "../assets/food/takoyaki.jpg";
import Tempura from "../assets/food/tempura.jpg";
import udon from "../assets/food/udon.jpg";
import noodles from "../assets/food/yakisoba.jpg";
import yakitori from "../assets/food/yakitori.jpg";

export default function Menu() {
    const meals = [
        { name: "Gyoza (Fried Dumplings)", image: gyoza, description: "Les gyoza sont des raviolis japonais d’origine chinoise." },
        { name: "Kashipan (Sweet Bread)", image: Kashipan, description: "Kashipan sont des petits pains moelleux, fourrés de confiture ou diverses garnitures délicieuses telles qu'une crème pâtissière au chocolat." },
        { name: "Miso Soup", image: ms, description: "La soupe miso est une recette de cuisine traditionnelle de la cuisine japonaise, de bouillon à base de miso et de dashi." },
        { name: "Nikujaga (Meat And Potatoes)", image: nikujaga, description: "Le nikujaga est un plat japonais constitué de viandes, pommes de terre et oignons cuits dans un bouillon sucré au soja." },
        { name: "Natto Rice Bowl", image: natto, description: "Un aliment fermenté japonais traditionnel à base de graines de soja fermentées, consommé le plus souvent comme accompagnement du riz." },
        { name: "Okonomiyaki (Savory Pancake)", image: pancake, description: "Un mélange de farine de blé, d'œuf, de bouillon de poisson et de chou blanc. La base d'Osaka contient souvent en plus du nagaimo, un type d'igname." },
        { name: "Onigiri", image: Onigiri, description: "Une préparation culinaire japonaise consistant en une boulette de riz, généralement enveloppée d'une algue nori." },
        { name: "Ramen", image: ramen, description: "Une variété de nouilles que l'on plonge dans un bouillon à base de viande ou de poisson aromatisé à la sauce soja ou miso ; plat ainsi réalisé." },
        { name: "Sashimi", image: Sashimi, description: "Un plat japonais de poisson cru découpé en fines lamelles, servi accompagné d'une sauce piquante." },
        { name: "Sukiyaki Hot Pot", image: Sukiyaki, description: "Un plat composé de lamelles de bœuf et de légumes, que chacun fait cuire sur un réchaud en les plongeant dans un bouillon." },
        { name: "Sushi", image: sushi, description: "Une boulette de riz vinaigré couronnée de lamelles de poisson cru, etc., ou enroulée dans une feuille d'algue." },
        { name: "Takoyaki (Fried Octopus)", image: takoyaki, description: "Le takoyaki est un beignet de pâte à crêpe au poulpe nappé de sauce BBQ japonaise et de mayonnaise et saupoudré d'échalotes et de flocons de bonito (poisson séché)." },
        { name: "Tempura", image: Tempura, description: "Un beignet à base de légumes ou de poissons, à pâte très légère." },
        { name: "Udon Noodle Soup", image: udon, description: "Une variété de nouilles épaisses japonaises à la farine de blé tendre." },
        { name: "Yakisoba (Stir-Fried Noodles)", image: noodles, description: "Un plat de nouilles, viande et légumes sautés et assaisonnés d'une savoureuse sauce spéciale appelée sauce yakisoba." },
        { name: "Yakitori (Chicken Skewers)", image: yakitori, description: "Une brochette de de viande, principalement de poulet." },
    ];

    return (
        <div className="container-fluid menu mt-5 pt-4" id='menu'>
            <Row><h1>Menu:</h1></Row>
            <div className="cards-container">
                <Row className="row-cols-xs-1 row-cols-md-2 row-cols-xl-4 g-4">
                    {meals.map((meal, index) => (
                        <Col key={index}>
                            <div className="card">
                                <img src={meal.image} className="card-img-top img-fluid" alt={`Image of ${meal.name}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{meal.name}</h5>
                                    <p className="card-text">{meal.description}</p>
                                    <a href="#" className="btn btn-warning p-2">Order now</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
