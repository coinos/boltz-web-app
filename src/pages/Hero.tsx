import { useNavigate } from "@solidjs/router";
import { Show } from "solid-js";

import bitcoin from "../assets/bitcoin-icon.svg";
import lightning from "../assets/lightning-icon.svg";
import liquid from "../assets/liquid-icon.svg";
import { useGlobalContext } from "../context/Global";
import Create from "../pages/Create";
import "../style/hero.scss";

export const Hero = () => {
    const navigate = useNavigate();

    const { hideHero, setHideHero, t } = useGlobalContext();

    return (
        <div id="hero" class="inner-wrap">
            <div
                id="create-overlay"
                class={hideHero() ? "" : "glow"}
                onClick={() => setHideHero(true)}>
                <Create />
            </div>
            <Show when={!hideHero()}>
                <h1>
                    {t("headline")}
                    <small>{t("subline")}</small>
                </h1>
                <span class="btn btn-inline" onClick={() => navigate("swap")}>
                    {t("start_swapping")}
                </span>
                <div class="hero-boxes">
                    <div class="hero-box">
                        <h2>{t("fast")}</h2>
                        <h3>{t("l2")}</h3>
                        <hr />
                        <p>{t("l2_sub")}</p>
                    </div>
                    <div class="hero-box">
                        <h2>{t("safe")}</h2>
                        <h3>{t("non_custodial")}</h3>
                        <hr />
                        <p>{t("non_custodial_sub")}</p>
                    </div>
                    <div class="hero-box">
                        <h2>{t("assets")}</h2>
                        <h3>{t("assets_sub")}</h3>
                        <hr />
                        <div class="hero-icons">
                            <img
                                src={lightning}
                                alt="Lightning Bitcoin"
                                class="full-bleed"
                            />
                            <img src={bitcoin} alt="Bitcoin" class="padded" />
                            <img
                                src={liquid}
                                alt="Liquid Bitcoin"
                                class="padded"
                            />
                        </div>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default Hero;
