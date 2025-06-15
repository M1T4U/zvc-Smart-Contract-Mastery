import { Book } from './types';

export const BOOK_CONTENT: Book = {
  title: "ZVC SMART CONTRACT MASTERY",
  chapters: [
    {
      id: "ch1",
      title: "Chapter 1: Foundations of Blockchain & Web3",
      description: "Understanding the core concepts that power decentralized applications.",
      topics: [
        {
          id: "ch1_t1",
          title: "What is Blockchain?",
          introduction: [
            "Blockchain technology is the bedrock upon which cryptocurrencies and Web3 applications are built. It's a distributed, immutable ledger that records transactions and tracks assets in a business network.",
            "This topic explores its fundamental characteristics, various forms, and key components."
          ],
          subTopics: [
            {
              id: "ch1_t1_st1",
              title: "Core Concepts",
              content: [
                "**Decentralization:** Unlike traditional centralized databases, a blockchain is typically distributed across many computers (nodes) in a peer-to-peer network. This means no single entity has control, enhancing security, censorship resistance, and reducing single points of failure. Decisions are often made through consensus mechanisms (e.g., Proof-of-Work, Proof-of-Stake) where network participants agree on the validity of transactions.",
                "**Immutability:** Once a transaction is recorded on the blockchain (added to a block, which is then chained to the previous block), it cannot be easily altered or deleted. This is achieved through cryptographic hashing; each block contains a hash of the previous block, creating a secure chain. Modifying a block would change its hash, and consequently, the hashes of all subsequent blocks, making tampering evident and computationally infeasible on a large network.",
                "**Transparency:** While user identities can be pseudonymous (represented by cryptographic addresses), transactions on public blockchains are generally visible to anyone. Specialized websites called 'block explorers' allow anyone to view transaction details, block contents, and account balances. This transparency allows for verification and auditing of activities, fostering trust."
              ],
              notes: [
                { id: "n1", type: 'info', content: "Think of a blockchain as a shared, digital Google Doc that everyone can see and add to, but no one can secretly edit previous entries. Each new entry is cryptographically linked to the previous one." },
                { id: "n2", type: 'tip', content: "The immutability feature is crucial for building trust in systems without a central authority. It's what makes blockchain data reliable for financial records, supply chain tracking, and more." },
                { id: "n1_add1", type: 'warning', content: "While transparent, public blockchains don't inherently guarantee privacy of identity. Linking an address to a real-world identity can de-anonymize a user's transaction history."}
              ]
            },
            {
              id: "ch1_t1_st2",
              title: "Types of Blockchains",
              content: [
                "**Public Blockchains (Permissionless):** Open to anyone to join, participate in transaction validation (e.g., mining, staking), and view the ledger. Examples include Bitcoin, Ethereum, and Litecoin. They are highly decentralized and transparent but can face scalability challenges.",
                "**Private Blockchains (Permissioned):** Controlled by a single organization that determines who can participate. Participants require permission to join, read, or write to the blockchain. Useful for internal enterprise applications where data privacy and control are paramount (e.g., internal record keeping, supply chain management within a company).",
                "**Consortium Blockchains (Federated/Permissioned):** Governed by a group of organizations rather than a single one. Offers a balance between public and private models, suitable for collaboration between multiple entities that require shared, trusted data but not full public openness (e.g., a group of banks sharing KYC data)."
              ],
              notes: [
                { id: "n3", type: 'warning', content: "Choosing the right type of blockchain depends heavily on the specific use case and requirements for privacy, control, performance, and decentralization." },
                { id: "n1_add2", type: 'info', content: "Hybrid blockchains also exist, attempting to combine features of both public and private chains, such as allowing private transactions on a public ledger."}
              ]
            },
            {
              id: "ch1_t1_st3",
              title: "Key Components of a Blockchain",
              content: [
                "**Block:** A data structure that bundles a set of transactions. Each block also contains a cryptographic hash of the previous block in the chain (linking them together), a timestamp, and a nonce (a number used in mining for Proof-of-Work blockchains).",
                "**Transaction:** A record of an event or data transfer. In cryptocurrencies, this is typically a transfer of digital assets. In other applications, it could represent an update to a record, a vote, or execution of a smart contract function.",
                "**Chain:** A sequence of blocks linked together using cryptography. Each new block added strengthens the security of the preceding blocks.",
                "**Network (Peer-to-Peer):** The distributed system of computers (nodes) that maintain copies of the blockchain, validate transactions, and propagate new blocks. Nodes communicate directly with each other without relying on a central server."
              ],
              notes: [
                { id: "n1_add3", type: 'tip', content: "Understanding these components is crucial to grasping how a blockchain achieves its security and decentralization."}
              ]
            },
            {
              id: "ch1_t1_st4",
              title: "The Blockchain Trilemma",
              content: [
                "The Blockchain Trilemma, a concept often attributed to Vitalik Buterin (co-founder of Ethereum), suggests that decentralized networks can only provide two of three benefits at any given time: **Decentralization, Security, and Scalability**.",
                "**Decentralization:** Control and decision-making are distributed among participants, avoiding single points of failure or control.",
                "**Security:** The network's ability to defend against attacks, fraud, and unauthorized modifications. This often involves significant computational power or economic stake.",
                "**Scalability:** The ability of the blockchain to handle a large number of transactions per second (TPS) and support growth in users and data.",
                "Many blockchain projects are actively working on solutions (e.g., Layer 2 scaling, sharding) to address this trilemma and achieve a better balance across all three aspects."
              ],
              notes: [
                { id: "n1_add4", type: 'info', content: "For example, Bitcoin is highly secure and decentralized, but has limited scalability (low TPS). Some newer chains might offer higher TPS but could compromise on decentralization or security aspects."}
              ]
            }
          ]
        },
        {
          id: "ch1_t2",
          title: "Understanding Web3",
          introduction: [
            "Web3 represents the next evolution of the internet, aiming to create a more decentralized, user-centric, and open web. It leverages blockchain technology, cryptocurrencies, and decentralized autonomous organizations (DAOs) to empower users and shift away from the platform-dominated Web2 era.",
            "It's about giving users more control over their data, identity, and online interactions."
          ],
          subTopics: [
            {
              id: "ch1_t2_st1",
              title: "Evolution: Web1, Web2, Web3",
              content: [
                "**Web1 (The Information Economy - Read-Only):** Approximately 1990-2004. Characterized by static websites where users primarily consumed information. Think of personal websites, early news sites, and directories. Content creation was limited to those with technical skills.",
                "**Web2 (The Platform Economy - Read-Write):** Approximately 2004-Present. Marked by dynamic content, user-generated content, social media, e-commerce, and mobile apps. Dominated by large tech platforms (e.g., Google, Facebook, Amazon) that provide services in exchange for user data. Users can create and share content easily, but often within walled gardens.",
                "**Web3 (The Token Economy - Read-Write-Own):** Emerging internet. Focuses on decentralization, user ownership of data and digital assets, and peer-to-peer interactions facilitated by blockchain. Users can not only read and write but also *own* parts of the internet services through tokens (cryptocurrencies or NFTs)."
              ],
              notes: [
                { id: "n4", type: 'info', content: "Web3 aims to shift power from large corporations back to individual users and creators, fostering a more equitable and transparent digital world." },
                { id: "n1_add5", type: 'tip', content: "The transition between these web eras is gradual and overlapping. Many Web2 companies are exploring Web3 technologies."}
              ]
            },
            {
              id: "ch1_t2_st2",
              title: "Key Principles of Web3",
              content: [
                "**Decentralization:** Applications (dApps) run on peer-to-peer networks or blockchains, not centralized servers controlled by a single company. This enhances resilience and reduces censorship.",
                "**Trustlessness:** Interactions can occur securely between parties without needing to trust a central intermediary, as the underlying blockchain protocol enforces the rules. For example, Decentralized Finance (DeFi) allows lending and borrowing without traditional banks.",
                "**Permissionlessness:** Anyone can participate, use services, or build on Web3 platforms without requiring approval from a central authority. This fosters innovation and open access.",
                "**Verifiability:** Transactions and data (especially those related to ownership and state changes) are publicly verifiable on the blockchain, increasing transparency and auditability.",
                "**User Ownership & Control:** Users have greater control over their digital identity, data, and assets, often managed through cryptographic wallets. NFTs, for instance, represent verifiable ownership of unique digital or physical items."
              ],
              notes: [
                {id: "n1_add6", type: 'info', content: "These principles are ideals that the Web3 movement strives for. Real-world implementations may vary in their adherence to these principles."}
              ]
            },
            {
              id: "ch1_t2_st3",
              title: "Core Components of Web3",
              content: [
                "**Cryptographic Wallets:** Digital wallets (e.g., MetaMask, Trust Wallet) are essential tools for interacting with Web3. They allow users to store and manage their cryptocurrencies and NFTs, sign transactions, and interact with dApps. They hold private keys, which are like passwords for accessing blockchain assets.",
                "**Decentralized Applications (dApps):** Applications whose backend code (smart contracts) runs on a decentralized peer-to-peer network, rather than traditional centralized servers. They offer similar functionalities to Web2 apps but with Web3's principles.",
                "**Decentralized Autonomous Organizations (DAOs):** Organizations represented by rules encoded as computer programs (smart contracts) that are transparent, controlled by the organization members, and not influenced by a central government. Token holders often vote on proposals to govern the DAO.",
                "**Non-Fungible Tokens (NFTs):** Unique cryptographic tokens that represent ownership of a specific item, whether digital (art, collectibles, virtual land) or physical. They are not interchangeable like cryptocurrencies (fungible tokens).",
                "**Decentralized Identifiers (DIDs):** A new type of identifier that enables verifiable, decentralized digital identity. DIDs are fully under the control of the DID subject, independent from any centralized registry, identity provider, or certificate authority."
              ],
              notes: [
                {id: "n1_add7", type: 'tip', content: "Familiarizing yourself with these components will help you navigate the Web3 ecosystem more effectively."}
              ]
            },
            {
              id: "ch1_t2_st4",
              title: "Benefits and Challenges of Web3",
              content: [
                "**Potential Benefits:**",
                "  - **Enhanced User Privacy & Control:** Users can manage their data and digital identities more directly.",
                "  - **Increased Transparency & Security:** Blockchain-based systems offer auditable and tamper-resistant records.",
                "  - **Reduced Censorship & Single Points of Failure:** Decentralized infrastructure is more resilient.",
                "  - **New Economic Models:** Tokenization enables novel ways to incentivize participation and ownership.",
                "  - **Innovation:** Open and permissionless nature fosters rapid development and experimentation.",
                "**Current Challenges:**",
                "  - **Scalability:** Many blockchain networks still struggle with high transaction volumes and speeds.",
                "  - **User Experience (UX):** Interacting with Web3 applications can be complex for non-technical users.",
                "  - **Regulation:** The regulatory landscape for cryptocurrencies and Web3 is still evolving and uncertain in many jurisdictions.",
                "  - **Security Risks:** While blockchains are secure, smart contract vulnerabilities and scams are prevalent.",
                "  - **Environmental Concerns:** Some blockchain consensus mechanisms (like Bitcoin's Proof-of-Work) are energy-intensive, though alternatives like Proof-of-Stake are gaining traction."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ch2",
      title: "Chapter 2: Smart Contract Fundamentals",
      description: "Diving into the world of self-executing contracts and their programming language, Solidity.",
      topics: [
        {
          id: "ch2_t1",
          title: "What are Smart Contracts?",
          introduction: [
            "Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code. They run on a blockchain, making them transparent, immutable, automated, and often, unstoppable once deployed.",
            "They are a core component of many blockchain platforms, enabling the creation of dApps and automating complex processes without intermediaries."
          ],
          subTopics: [
            {
              id: "ch2_t1_st1",
              title: "Definition and Analogy",
              content: [
                "The term 'smart contract' was first coined by computer scientist and cryptographer Nick Szabo in the 1990s, long before Bitcoin or Ethereum existed. He envisioned a digital vending machine: you insert money (input), select a product (condition), and the machine automatically dispenses the product and change (output). A smart contract works similarly but for digital assets and more complex logic, all executed on a blockchain.",
                "They automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. If predefined conditions are met, the contract automatically executes the agreed-upon terms."
              ],
              notes: [
                {id: "n5", type: 'tip', content: "Smart contracts reduce the need for trusted intermediaries (like lawyers or banks for certain processes), leading to lower costs, increased efficiency, and reduced counterparty risk." },
                {id: "n2_add1", type: 'info', content: "While 'contract' is in the name, smart contracts aren't necessarily legally binding in all jurisdictions in the same way traditional paper contracts are. Their legal status is an evolving area."}
              ],
              codeExamples: [
                {
                  language: "analogy",
                  code: `
// Vending Machine Analogy
FUNCTION processPurchase(coins_inserted, item_selected):
  IF (coins_inserted >= price_of(item_selected)) THEN
    dispense_item(item_selected);
    IF (coins_inserted > price_of(item_selected)) THEN
      dispense_change(coins_inserted - price_of(item_selected));
    END IF
    RETURN "Purchase successful";
  ELSE
    RETURN "Insufficient funds";
  END IF
END FUNCTION`,
                  explanation: "This pseudo-code illustrates the conditional logic similar to a smart contract: specific inputs lead to predefined, automated outputs."
                }
              ]
            },
            {
              id: "ch2_t1_st2",
              title: "Common Use Cases",
              content: [
                "**Decentralized Finance (DeFi):** Lending, borrowing, automated market makers (AMMs), stablecoins, insurance.",
                "**Non-Fungible Tokens (NFTs):** Representing ownership of unique digital or physical assets, enabling digital art markets, collectibles, gaming items.",
                "**Supply Chain Management:** Tracking goods, verifying authenticity, and improving transparency from origin to consumer.",
                "**Decentralized Identity (DID):** Managing and controlling personal identity information without relying on central authorities.",
                "**Voting and Governance:** Enabling secure and transparent voting mechanisms for DAOs or other organizations.",
                "**Gaming:** In-game assets, play-to-earn models, and verifiable scarcity of items.",
                "**Escrow Services:** Holding funds or assets until certain conditions are met, then automatically releasing them."
              ],
              notes: [
                {id: "n2_add2", type: 'warning', content: "Smart contracts are only as 'smart' as the code written for them. Bugs or logical flaws can lead to significant financial losses or unintended behavior, and due to immutability, fixing them can be complex."}
              ]
            },
            {
              id: "ch2_t1_st3",
              title: "The Lifecycle of a Smart Contract",
              content: [
                "**1. Creation (Coding):** Developers write the smart contract code in a language like Solidity. This involves defining the rules, logic, functions, and state variables.",
                "**2. Compilation:** The human-readable code is compiled into bytecode, which is the low-level language that the Ethereum Virtual Machine (EVM) or similar blockchain virtual machines can understand and execute.",
                "**3. Deployment:** The compiled bytecode is sent as a transaction to the blockchain. If successful, the contract is deployed at a specific address on the network. This step typically costs gas (transaction fees).",
                "**4. Execution:** Users or other contracts interact with the deployed smart contract by calling its functions. This also involves sending transactions and paying gas fees. The EVM executes the function logic, potentially altering the contract's state or transferring assets.",
                "**5. Termination/Upgrade (Nuanced):** True termination is rare. Smart contracts are generally immutable. However, upgradeability patterns (e.g., proxy contracts) can be implemented to allow for updating the logic while preserving state and the contract address. Some contracts might have self-destruct mechanisms, but their use is generally discouraged."
              ],
              notes: [
                  {id: "n2_add3", type: 'tip', content: "Thorough testing and auditing are crucial steps before deploying a smart contract to a main network due to the high stakes and immutability."}
              ]
            }
          ]
        },
        {
          id: "ch2_t2",
          title: "Introduction to Solidity",
          introduction: [
            "Solidity is the most popular, high-level, contract-oriented programming language for writing smart contracts. It was specifically designed for targeting the Ethereum Virtual Machine (EVM), the runtime environment for smart contracts on Ethereum and many other EVM-compatible blockchains (e.g., Polygon, BNB Chain, Avalanche C-Chain).",
            "Understanding Solidity is essential for anyone looking to develop dApps on these platforms."
          ],
          subTopics: [
            {
              id: "ch2_t2_st1",
              title: "Why Solidity?",
              content: [
                "**Statically Typed:** Variable types must be explicitly declared and are checked at compile time. This helps catch many common errors early in the development process.",
                "**Influenced by C++, Python, and JavaScript:** Its syntax incorporates elements from these popular languages, making it relatively familiar to developers with backgrounds in them.",
                "**Designed for the Ethereum Virtual Machine (EVM):** Solidity compiles directly to EVM bytecode. The EVM handles the execution of smart contracts, manages state, and ensures deterministic behavior.",
                "**Turing Complete (with caveats):** Solidity allows for complex computations and logic, though gas limits practically constrain infinite loops.",
                "**Rich Ecosystem:** Extensive tooling, libraries (like OpenZeppelin), and community support are available for Solidity development."
              ],
               notes: [
                { id: "n6", type: 'info', content: "While Solidity is dominant for EVM chains, other languages like Vyper (Python-like syntax, focused on security and simplicity) and Yul (an intermediate language) are also used. Non-EVM chains often use different languages (e.g., Rust for Solana, NEAR; Clarity for Stacks)." },
                { id: "n2_add4", type: 'tip', content: "Always specify the Solidity version using a pragma (e.g., `pragma solidity ^0.8.20;`) to ensure your contract compiles with a compatible compiler version and to avoid unexpected behavior due to breaking changes in newer versions."}
              ]
            },
            {
              id: "ch2_t2_st2",
              title: "Basic Syntax and Structure",
              content: [
                "A Solidity source file typically starts with a **version pragma** (e.g., `pragma solidity ^0.8.0;`) and an **SPDX license identifier** (e.g., `// SPDX-License-Identifier: MIT`).",
                "Contracts are defined using the `contract` keyword, similar to classes in object-oriented programming. A contract can contain:",
                "  - **State Variables:** Variables whose values are permanently stored in contract storage on the blockchain (e.g., `uint256 public myNumber;`).",
                "  - **Functions:** Executable units of code that define the behavior of the contract. Functions can modify state variables, perform calculations, and interact with other contracts. They have visibility specifiers (`public`, `private`, `internal`, `external`).",
                "  - **Structs:** Custom data types to group related variables (e.g., `struct User { uint id; string name; }`).",
                "  - **Enums:** Custom types to create a finite set of constant values (e.g., `enum Status { Pending, Active, Completed }`).",
                "  - **Events:** A way for smart contracts to communicate that something has happened on the blockchain. dApp frontends can listen for these events.",
                "  - **Modifiers:** Reusable pieces of code to change the behavior of functions, often used for access control or input validation (e.g., `modifier onlyOwner { require(msg.sender == owner); _; }`).",
                "  - **Constructor:** A special optional function declared with the `constructor` keyword that is executed only once when the contract is deployed. It's often used to initialize state variables.",
                "Comments are similar to JavaScript: `// for single-line` and `/* ... */ for multi-line`."
              ],
              codeExamples: [
                {
                  language: "solidity",
                  code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // Specifies compiler version

// Import another contract (optional)
// import "./AnotherContract.sol";

contract SimpleStorage {
    // State variable - stored on the blockchain
    uint256 private storedData; 
    address public owner;

    // Event - to log changes
    event DataChanged(address indexed changer, uint256 newValue);

    // Constructor - executed once at deployment
    constructor() {
        owner = msg.sender; // msg.sender is the address deploying the contract
    }

    // Modifier - for access control
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _; // Indicates where the original function code is inserted
    }

    // Function to set data - modifies state, costs gas
    function set(uint256 x) public onlyOwner {
        storedData = x;
        emit DataChanged(msg.sender, x); // Emit an event
    }

    // Function to get data - reads state, 'view' means it doesn't modify state, usually free to call locally
    function get() public view returns (uint256) {
        return storedData;
    }

    // Function that performs a calculation - 'pure' means it neither reads nor modifies state
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }
}`,
                  explanation: "A more detailed Solidity contract showing common elements like constructor, modifier, event, and function types (view, pure)."
                }
              ],
              notes: [
                {id: "n2_add5", type: 'warning', content: "Every state-modifying operation (writing to storage, sending Ether, creating contracts) costs 'gas', which is a fee paid to network validators. Optimize your contracts to be gas-efficient."}
              ]
            },
            {
              id: "ch2_t2_st3",
              title: "Common Data Types in Solidity",
              content: [
                "Solidity is statically-typed, meaning you must declare the type of each variable.",
                "**Value Types:**",
                "  - **`bool`:** Boolean, can be `true` or `false`.",
                "  - **`int` / `uint`:** Signed and unsigned integers of various sizes (e.g., `int8`, `uint256`). `uint` is an alias for `uint256`.",
                "  - **`address`:** Holds a 20-byte Ethereum address. Has members like `balance` and functions like `transfer`, `send`, `call`.",
                "  - **`bytes1` to `bytes32`:** Fixed-size byte arrays. `byte` is an alias for `bytes1`.",
                "  - **`enum`:** User-defined enumerated types.",
                "**Reference Types:** (Data location needs to be specified: `memory`, `storage`, or `calldata`)",
                "  - **`arrays`:** Fixed-size or dynamic arrays. E.g., `uint[] public dynamicArray;` `uint[5] public fixedArray;`.",
                "  - **`structs`:** User-defined types to group variables. E.g., `struct Item { uint id; string name; }`.",
                "  - **`mappings`:** Hash tables for key-value pairs. E.g., `mapping(address => uint) public balances;`. Keys can be almost any type except mappings, dynamic arrays, enums, or structs containing these types. Values can be any type.",
                "  - **`string`:** UTF-8 encoded dynamic-size string. A sequence of characters.",
                "  - **`bytes`:** Dynamically-sized byte array.",
                "**Special Literals and Globals:**",
                "  - `msg.sender`: Address of the caller of the current function.",
                "  - `msg.value`: Amount of Ether sent with the transaction call (in wei).",
                "  - `block.timestamp`: Current block timestamp (seconds since Unix epoch).",
                "  - `block.number`: Current block number.",
                "  - `tx.origin`: Address of the original external account that initiated the transaction."
              ],
              codeExamples: [
                {
                  language: "solidity",
                  code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DataTypesExample {
    bool public isActive = true;
    uint256 public count = 100; // Unsigned integer (default size)
    int8 public temperature = -5; // Signed 8-bit integer
    address public contractDeployer;
    bytes32 public dataHash;

    enum Status { Pending, Approved, Rejected }
    Status public currentStatus = Status.Pending;

    uint[] public scores; // Dynamic array (reference type)
    mapping(address => uint) public userBalances; // Mapping (reference type)
    string public notice = "Hello Solidity!"; // String (reference type) - Formerly 'message'

    struct User {
        uint id;
        string name;
        address userAddress;
    }
    User public adminUser;

    constructor() {
        contractDeployer = msg.sender;
        adminUser = User(1, "Admin", msg.sender);
        userBalances[msg.sender] = 1000;
        scores.push(95);
        scores.push(88);
    }
}`,
                  explanation: "Examples of various data types and their initialization in Solidity."
                }
              ],
               notes: [
                {id: "n2_add6", type: 'tip', content: "`uint256` (or `uint`) is the most common integer type for token amounts and IDs because it offers a large range and is gas-efficient for many operations on the EVM."}
              ]
            },
            {
              id: "ch2_t2_st4",
              title: "Control Structures & Error Handling",
              content: [
                "Solidity provides standard control structures for conditional logic and looping:",
                "  - **`if / else if / else`:** Conditional execution.",
                "  - **`for` loops:** `for (uint i = 0; i < array.length; i++) { ... }`",
                "  - **`while` loops:** `while (condition) { ... }`",
                "  - **`do ... while` loops:** `do { ... } while (condition);` (less common)",
                "**Error Handling:** Solidity has built-in functions to handle errors and revert transactions if conditions are not met. Reverting a transaction undoes all state changes made during the current call and refunds remaining gas to the caller.",
                "  - **`require(condition, \"Error message\");`**: Used to validate inputs, conditions before execution, or return values from external calls. If `condition` is false, the transaction reverts. This is the most common way to handle errors.",
                "  - **`assert(condition);`**: Used for internal errors or to check for invariants (conditions that should never be false). If `condition` is false, it typically consumes all gas and reverts. Use assert for things that should be logically impossible.",
                "  - **`revert(\"Error message\");` / `revert CustomError();`**: Unconditionally reverts the transaction. Can be used with custom error types for more gas-efficient error reporting."
              ],
              codeExamples: [
                {
                  language: "solidity",
                  code: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ControlAndErrors {
    address public owner;
    uint public value;
    mapping(address => uint) public contributions;

    error NotOwner(); // Custom Error
    error AmountTooSmall(uint sent, uint required); // Custom Error with parameters

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint _newValue) public {
        // require for input validation or access control
        if (msg.sender != owner) {
            revert NotOwner();
        }
        // require(msg.sender == owner, "Only owner can set value.");
        
        value = _newValue;
    }

    function contribute() public payable {
        // require for checking conditions related to msg.value
        if (msg.value < 1 ether) {
            revert AmountTooSmall(msg.value, 1 ether);
        }
        // require(msg.value >= 1 ether, "Contribution must be at least 1 ETH.");
        
        contributions[msg.sender] += msg.value;
    }

    function processArray(uint[] memory data) public pure returns (uint sum) {
        // For loop example
        sum = 0;
        for (uint i = 0; i < data.length; i++) {
            sum += data[i];
        }
        // Assert for internal consistency check (example, though may not always be needed here)
        // This assert is a bit trivial, but demonstrates its use for invariants.
        if (data.length > 0) {
            assert(sum >= data[0]); 
        }
    }
}`,
                  explanation: "Illustrates `if`, `for`, `require`, and custom `error` usage for control flow and error handling."
                }
              ],
              notes: [
                {id: "n2_add7", type: 'warning', content: "Be cautious with loops, especially those iterating over unbounded arrays or involving external calls, as they can lead to 'out-of-gas' errors or reentrancy vulnerabilities if not handled carefully." },
                {id: "n2_add8", type: 'tip', content: "Using custom errors (e.g., `error InsufficientBalance(); ... revert InsufficientBalance();`) is generally more gas-efficient than `require` with string messages, especially from Solidity 0.8.4 onwards."}
              ]
            }
          ]
        }
      ]
    },
     {
      id: "ch3",
      title: "Chapter 3: Hardhat for Development",
      description: "Setting up your development environment and workflow with Hardhat, a powerful tool for Ethereum smart contract development.",
      topics: [
        {
          id: "ch3_t1",
          title: "Introduction to Hardhat",
           introduction: [
            "Hardhat is a flexible and extensible Ethereum development environment. It helps developers manage and automate the recurring tasks inherent in building smart contracts and dApps, such as compiling, deploying, testing, and debugging.",
            "It provides a local Ethereum network (Hardhat Network) specifically designed for development, making the process faster and more efficient."
          ],
          subTopics: [
            {
              id: "ch3_t1_st1",
              title: "Key Features",
              content: [
                "**Hardhat Network:** A local Ethereum network designed for development. It mines blocks instantly, has predictable state, and doesn't cost real Ether. It supports features like mainnet forking (running a local node that simulates mainnet state from a specific block), impersonating accounts, and logging.",
                "**Solidity Stack Traces:** When a transaction fails on Hardhat Network, Hardhat gives you detailed Solidity stack traces, messages, and clear explanations of the failure, making debugging much easier.",
                "**`console.log` in Solidity:** Debug your Solidity code with `console.log` statements (using `hardhat/console.sol`), similar to how you would in JavaScript. Output appears in the Hardhat console.",
                "**Extensible with Plugins:** A rich ecosystem of plugins to add more functionality. Common plugins include `hardhat-ethers` (for Ethers.js integration), `hardhat-waffle` or `hardhat-chai-matchers` (for testing assertions), and `hardhat-etherscan` (for contract verification on block explorers).",
                "**TypeScript Support:** First-class TypeScript support for your configuration, tests, and scripts.",
                "**Task Management:** Define custom tasks or override existing ones to automate your workflow."
              ],
              notes: [
                { id: "n7", type: 'tip', content: "Hardhat significantly speeds up the development cycle by providing a fast and reliable local testing environment. Mainnet forking is particularly powerful for testing interactions with existing mainnet contracts."}
              ]
            },
            {
              id: "ch3_t1_st2",
              title: "Setting up a Hardhat Project",
              content: [
                "1. **Prerequisites:** Ensure you have Node.js (v16+ recommended) and npm (or yarn) installed.",
                "2. **Create Project Directory:** `mkdir my-hardhat-project && cd my-hardhat-project`",
                "3. **Initialize npm Project:** `npm init -y` (This creates a `package.json` file).",
                "4. **Install Hardhat:** `npm install --save-dev hardhat`",
                "5. **Install Hardhat Toolbox (Recommended):** The Hardhat Toolbox bundles commonly used plugins and dependencies. `npm install --save-dev @nomicfoundation/hardhat-toolbox` (This includes ethers.js, hardhat-ethers, hardhat-chai-matchers, etc.)",
                "6. **Initialize Hardhat Project:** Run `npx hardhat` in your project directory. You'll be prompted to choose a project type (e.g., 'Create a TypeScript project' or 'Create a JavaScript project'). This will generate a sample `hardhat.config.js` (or `.ts`), sample contract, test, and script.",
                "**Typical Project Structure:**",
                "  - `contracts/`: Directory for your Solidity source files (`.sol`).",
                "  - `scripts/`: Directory for deployment and interaction scripts (`.js` or `.ts`).",
                "  - `test/`: Directory for your test files (`.js` or `.ts`).",
                "  - `hardhat.config.js` (or `hardhat.config.ts`): Hardhat configuration file.",
                "  - `package.json`: Manages project dependencies and scripts."
              ],
              codeExamples: [
                {
                  language: "bash",
                  code: `
# 1. Create directory and navigate into it
mkdir my-awesome-contract
cd my-awesome-contract

# 2. Initialize npm project
npm init -y

# 3. Install Hardhat and the recommended Toolbox
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# 4. Run Hardhat's interactive initializer
npx hardhat
# Answer the prompts:
# ? What do you want to do? › Create a TypeScript project (or JavaScript)
# ? Hardhat project root: › (press Enter for current directory)
# ? Do you want to add a .gitignore? › Yes
# ? Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? › Yes (if you haven't installed toolbox manually)
`,
                  explanation: "Commands to initialize a new Hardhat project with the Hardhat Toolbox."
                }
              ],
              notes: [
                {id: "n3_add1", type: 'info', content: "The `hardhat.config.js` (or `.ts`) file is crucial. Here you configure Solidity compiler versions, network settings (for local, testnets, mainnet), and any installed plugins."}
              ]
            },
            {
                id: "ch3_t1_st3",
                title: "Writing and Compiling Contracts",
                content: [
                    "Place your Solidity smart contract files (e.g., `MyContract.sol`) in the `contracts/` directory.",
                    "To compile your contracts, run the following command in your Hardhat project's root directory:",
                    "`npx hardhat compile`",
                    "This command will:",
                    "  - Check your `hardhat.config.js` for Solidity compiler settings.",
                    "  - Download the specified compiler versions if not already present.",
                    "  - Compile your `.sol` files.",
                    "  - Output compilation artifacts (JSON files containing ABI, bytecode, etc.) into the `artifacts/` directory.",
                    "The ABI (Application Binary Interface) is a JSON representation of your contract's interface, defining how to interact with its functions and events. The bytecode is what gets deployed to the blockchain."
                ],
                codeExamples: [
                    {
                        language: "solidity",
                        code: `
// contracts/Greeter.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "hardhat/console.sol"; // For console.log

contract Greeter {
    string private greeting;
    address public owner;

    event GreetingChanged(address indexed changer, string oldGreeting, string newGreeting);

    constructor(string memory _greeting) {
        console.log("Deploying Greeter with greeting: %s", _greeting);
        greeting = _greeting;
        owner = msg.sender;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        // Basic authorization: only owner can change greeting
        // For more robust ownership, consider OpenZeppelin's Ownable.sol
        require(msg.sender == owner, "Greeter: Caller is not the owner");
        
        string memory oldGreeting = greeting;
        console.log("Changing greeting from '%s' to '%s' by %s", oldGreeting, _greeting, msg.sender);
        greeting = _greeting;
        emit GreetingChanged(msg.sender, oldGreeting, _greeting);
    }
}`,
                        explanation: "A simple `Greeter.sol` contract (often part of the sample Hardhat project) placed in the `contracts/` directory, now with an event and corrected console.log."
                    },
                    {
                        language: "bash",
                        code: "npx hardhat compile",
                        explanation: "Command to compile your Solidity contracts."
                    }
                ],
                notes: [
                    { id: "n3_add2", type: 'tip', content: "If you have multiple Solidity files with different pragma versions, you can configure multiple compilers in `hardhat.config.js` under the `solidity.compilers` array."}
                ]
            },
            {
                id: "ch3_t1_st4",
                title: "Testing Contracts with Hardhat",
                content: [
                    "Testing is a critical part of smart contract development. Hardhat integrates with testing frameworks like Mocha (test runner) and Chai (assertion library), often via `@nomicfoundation/hardhat-chai-matchers` (included in `hardhat-toolbox`). Tests are typically written in JavaScript or TypeScript and placed in the `test/` directory.",
                    "**Key Testing Concepts:**",
                    "  - **`describe` blocks:** Group related tests.",
                    "  - **`it` blocks:** Define individual test cases.",
                    "  - **`beforeEach` hook:** Code to run before each test case (e.g., deploying a fresh contract instance).",
                    "  - **Ethers.js:** Hardhat provides an Ethers.js instance (e.g., `hre.ethers`) to interact with contracts in tests (deploying, calling functions, checking balances).",
                    "  - **Assertions:** Use Chai matchers (e.g., `expect(value).to.equal(expectedValue);`, `await expect(tx).to.emit(greeterInstance, \"GreetingChanged\").withArgs(...)`) to verify contract behavior.",
                    "To run your tests: `npx hardhat test`"
                ],
                codeExamples: [
                    {
                        language: "typescript", // or javascript
                        code: `
// test/Greeter.test.ts 
import { expect } from "chai";
import { ethers } from "hardhat"; // Hardhat Runtime Environment's ethers
import { Greeter } from "../typechain-types"; // Assuming typechain generation

describe("Greeter Contract", function () {
  let GreeterFactory;
  let greeterInstance: Greeter; // Use TypeChain type if available
  let owner: any; // Using any for simplicity in this example; prefer specific Signer types
  let addr1: any;
  const initialGreeting = "Hello, Hardhat!";

  beforeEach(async function () {
    // Get signers (accounts)
    [owner, addr1] = await ethers.getSigners();

    // Deploy the Greeter contract
    GreeterFactory = await ethers.getContractFactory("Greeter");
    greeterInstance = await GreeterFactory.deploy(initialGreeting) as Greeter;
    // await greeterInstance.deployed(); // Not needed with ethers v6+ and Hardhat
  });

  it("Should return the initial greeting", async function () {
    expect(await greeterInstance.greet()).to.equal(initialGreeting);
  });

  it("Should allow the owner to set a new greeting and emit GreetingChanged event", async function () {
    const newGreeting = "Hola, Hardhat!";
    const oldGreeting = await greeterInstance.greet();
    
    // Call setGreeting from the owner's account
    const tx = await greeterInstance.connect(owner).setGreeting(newGreeting);
    
    // Wait for the transaction to be mined
    await tx.wait(); 

    expect(await greeterInstance.greet()).to.equal(newGreeting);

    // Check for event emission
    await expect(tx)
      .to.emit(greeterInstance, "GreetingChanged")
      .withArgs(owner.address, oldGreeting, newGreeting);
  });

  it("Should prevent non-owners from setting greeting", async function () {
    const newGreeting = "Privet, Hardhat!";
    await expect(
      greeterInstance.connect(addr1).setGreeting(newGreeting)
    ).to.be.revertedWith("Greeter: Caller is not the owner"); 
    
    // Greeting should remain unchanged
    expect(await greeterInstance.greet()).to.equal(initialGreeting);
  });
});
`,
                        explanation: "A basic test file for the `Greeter.sol` contract using Ethers.js and Chai, now testing event emission and ownership. Note: `owner` and `addr1` types are simplified to `any` for brevity but should ideally be more specific e.g. `SignerWithAddress` from hardhat-ethers if available."
                    },
                     {
                        language: "bash",
                        code: "npx hardhat test",
                        explanation: "Command to run all tests in the `test/` directory."
                    }
                ],
                notes: [
                    { id: "n3_add3", type: 'warning', content: "Write comprehensive tests covering all functions, modifiers, events, and edge cases. Smart contract bugs can be very costly!"}
                ]
            },
            {
                id: "ch3_t1_st5",
                title: "Deploying Contracts with Hardhat",
                content: [
                    "Deployment scripts are used to deploy your smart contracts to various networks (Hardhat Network, testnets like Sepolia, or Ethereum mainnet). These scripts are typically placed in the `scripts/` directory and written in JavaScript or TypeScript using Ethers.js.",
                    "**Key Deployment Script Concepts:**",
                    "  - Get a `ContractFactory` for your contract.",
                    "  - Call `deploy()` on the factory, passing constructor arguments if any.",
                    "  - The `deploy()` function returns a Promise that resolves to a `Contract` object representing your deployed contract.",
                    "  - You can then interact with the `contract` object (e.g., call functions, get its address).",
                    "To run a deployment script: `npx hardhat run scripts/your-deploy-script.ts --network <networkName>`",
                    "The `<networkName>` refers to networks defined in your `hardhat.config.js`. If omitted, it defaults to the `hardhat` network (Hardhat Network)."
                ],
                codeExamples: [
                    {
                        language: "typescript", // or javascript
                        code: `
// scripts/deployGreeter.ts
import { ethers } from "hardhat";

async function main() {
  const initialGreeting = "Hello from deployment script!";

  console.log("Deploying Greeter contract...");
  
  // Get the ContractFactory
  const GreeterFactory = await ethers.getContractFactory("Greeter");
  
  // Deploy the contract
  // Note: with ethers v6+, deploy() returns the contract instance directly.
  // The contract is considered deployed once the transaction is mined.
  const greeter = await GreeterFactory.deploy(initialGreeting);
  
  // To be certain deployment is complete, especially for scripts or further interactions:
  await greeter.waitForDeployment(); 

  const contractAddress = await greeter.getAddress();
  console.log(\`Greeter deployed to: \${contractAddress}\`);

  // Optionally, you can interact with the contract here
  // console.log(\`Initial greeting: \${await greeter.greet()}\`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
`,
                        explanation: "A sample script to deploy the `Greeter.sol` contract."
                    },
                    {
                        language: "bash",
                        code: `
# Deploy to the local Hardhat Network (default)
npx hardhat run scripts/deployGreeter.ts

# Deploy to a configured testnet (e.g., 'sepolia' if configured in hardhat.config.ts)
# npx hardhat run scripts/deployGreeter.ts --network sepolia 
`,
                        explanation: "Commands to run the deployment script."
                    }
                ],
                 notes: [
                    { id: "n3_add4", type: 'tip', content: "For deploying to public testnets or mainnet, you'll need to configure network details (RPC URL, private key for deployment account) in `hardhat.config.js`. Store private keys securely, for example, using environment variables and `.env` files (add `.env` to `.gitignore`)."}
                ]
            }
          ]
        }
      ]
    }
    // Add more chapters, topics, and subtopics as needed.
  ]
};