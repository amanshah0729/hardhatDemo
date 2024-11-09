// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EngagemintModule = buildModule("EngagemintModule", (m) => {
    const tokens = m.getParameter("tokens", [1, 2, 3]);

    const engagemint = m.contract("Engagemint", [tokens]);

    return { engagemint };
});

export default EngagemintModule;
