import { config } from "../config";
import { useGlobalContext } from "../context/Global";
import "../style/footer.scss";
import ExternalLink from "./ExternalLink";

const Footer = () => {
    const { t } = useGlobalContext();

    return (
        <footer>
            <p class="footer-nav">
                <ExternalLink href={config.repoUrl}>
                    {t("source_frontend")}
                </ExternalLink>{" "}
                |{" "}
                <ExternalLink href={config.backendRepoUrl}>
                    {t("source_backend")}
                </ExternalLink>
            </p>
            <p class="version">
                {t("version")}:{" "}
                <ExternalLink href={config.repoUrl}>
                    {__APP_VERSION__}
                </ExternalLink>
                , {t("commithash")}:{" "}
                <ExternalLink
                    href={`${config.repoUrl}/commit/${__GIT_COMMIT__}`}>
                    {__GIT_COMMIT__}
                </ExternalLink>
            </p>
        </footer>
    );
};
export default Footer;
