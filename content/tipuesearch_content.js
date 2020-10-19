var tipuesearch = {"pages": [{'title': '首頁', 'text': '使用教材:PC Hardware \n \n 進度表: \n 10/13\xa0PCH11:Fiber-Optic-Cable/光纖電纜(75%) \n 10/14  PCH11:Fiber-Optic-Cable/光纖電纜(100%) \n 10/19 PCH11:Twisted Pair Cable/雙絞線(100%) \n 10/19\xa0PCH11:Coaxial Cable/同軸電纜(100%) \n', 'tags': '', 'url': '首頁.html'}, {'title': '錯誤排除紀錄', 'text': '1. 10/13:遭遇切換至 2階時靜態404的錯誤。 \n 解決辦法:要轉成2階的名稱裡不能有 " / : 這些符號 \n 2. 10/15:遭遇進入9443出現error。 \n 解決辦法:將c:與y:的cp2020刪除後, 用 git clone --recurse-submodules URL.git的指令重抓進隨身碟後, 重開啟9443就可以了,網站上的紀錄跟出事前會是一樣的。 \n 3. 10/16:遭遇用隨身碟C:與y:做完後有save+轉靜態，但是在git pull卡住了,隨後雖然push 上去，但是遠端跟近端無法同步。 \n 解決辦法:將y:的cp2020刪除後, 用 git clone --recurse-submodules URL.git的指令重抓進隨身碟然後就ok了,\xa0 by a.m.2:27 \n \n', 'tags': '', 'url': '錯誤排除紀錄.html'}, {'title': 'HomeWork--', 'text': '', 'tags': '', 'url': 'HomeWork--.html'}, {'title': 'PCH 11', 'text': '', 'tags': '', 'url': 'PCH 11.html'}, {'title': 'PCH 11 Fiber-Optic-Cable(光纖電纜)', 'text': 'learning objectives/學習目標 \n Identify types of network cables and connectors. \n 識別網絡電纜和連接器的類型。 \n overview/概觀 \n In this module, we’re going to discuss the various types of network media. We will begin with fiber-optic cable and then discuss twisted pair cable and coaxial cable. For each of these cable types, we will discuss appearance, characteristics, and types of connectors, as well as speed and limitations. \n 在本模塊中，我們將會討論到各種類型的網絡媒體。我們將會從光纖電纜開始，然後討論雙絞線電纜和同軸電纜。對於每種電纜的類型，我們將會討論連接器的外觀，特性和類型，以及速度和限制。 \n Fiber-Optic-Cable(光纖電纜) \n \n Fiber-optic cables are constructed by using a glass core at the center of the cable that is surrounded by cladding. In order to send data from one end of the cable to the other, light from a light-emitting diode (LED) or laser is used to transmit the signal down the glass fiber at the center of the cable. Because the data is being transmitted using light, it is immune to the effects of electromagnetic interference (EMI) that impact traditional copper-based cables, such as twisted pair and coaxial cables. Fiber-optic cables possess the ability to send the data a very far distance (many miles) without the use of a repeater. They also can carry a significant amount of data due to their large bandwidth and the information traveling at light speed. Their bandwidth can be measured in gigabits or even terabits per second. There are two types of fiber cables: multimode and single-mode fiber. \n 光纖電纜是通過在電纜的中心使用玻璃芯製成的，該玻璃芯被層層圍繞。 為了將數據從電纜的一端發送到另一端，使用來自發光二極管（LED）或是使使用雷射的光線沿電纜中心的玻璃纖維向下傳輸信號。 由於數據是通過光傳輸的，因此不受電磁干擾（EMI）的影響，這些電磁干擾會影響傳統的銅基電纜，如雙絞線和同軸電纜。 光纖有無需使用中繼器就可傳輸到很遠的距離（許多英里）發送數據的能力 。由於它們的大帶寬和以光速傳播的信息，此外它們還可以攜帶大量數據。 它們的帶寬可以 以每秒1GB甚至是1TB的速度來測量 。而光纖電纜有兩種類型： 多模光纖與單模光纖 。 (多模光纜): Multimode fiber cables (MMF) contain a larger core than the single-mode variety. The core size for  a multimode fiber is 62.5 microns. A micron is a very small unit of measurement—it is actually even smaller than the width of a human hair. MMF’s larger core enables multiple modes of travel for the light from one end of the cable to the other. This allows a single fiber to carry multiple signals across it, with each signal being transmitted at a slightly different reflective angle. When the light reaches the destination,  the signals are then converted back into 1s and 0s and passed to the computer by the network interface card. Multimode fiber is commonly used in shorter distance fiber connections, such as from a router to a switch, a  switch to a switch, or a server to a switch 多模光纜（MMF）的芯線比單模光纜大。多模光纖的纖芯尺寸為62.5微米。微米是非常小的測量單位，實際上甚至比人類頭髮的寬度還小。 MMF的較大的芯線實現了從電纜一端到另一端的多種傳播模式。這樣一來，單根光纖就可以在其上傳輸多個信號，而每個信號的反射角度都會稍有不同。 當光到達目的地時，信號會被轉換回1和0，然後通過網絡接口卡傳遞到電腦中。 多模光纖通常用於較短距離的光纖連接中 ，例如從路由器到交換機，從交換器到交換器或從服務器到交換器。 (單模光纜): Single-mode fiber cables (SMF) contain a much smaller core than the multimode variety. The core size for SMF  is 10 microns. SMF’s smaller core only allows for a single mode of travel for the light from one end of the  cable to the other. This straight-through connection allows for data to travel longer distances without a repeater than it can travel using MMF. When the light reaches the destination, the signals are then converted back into 1s  and 0s and passed to the computer by the network interface card. Single mode fiber is commonly used in very long distance  fiber connections, such as a backbone connection from one local area network to another. \n 單模光纜（SMF）的芯線比多模光纜小得多。SMF的芯尺寸為10微米。SMF的較小芯線僅允許光從電纜一端到另一端的單一傳播模式。 這種直通連接允許數據在沒有中繼器的情況下傳輸更長的距離，而無法使用MMF進行傳輸。當光到達目的地時， 然後 信號被轉換回1和0， 然後通過網絡接口卡傳遞到電腦。單模光纖通常用於超長距離的光纖連接中，例如從一個局域網到另一個局域網的骨干連接。 Fiber-Optic Cable Connectors(光纖電纜連接器) \n Fiber cables only come in the two types discussed above: single-mode and  multimode. However, the ends of each of these cables come in four varieties. 光纖電纜僅屬於上述兩種類型：單模和多模。然而，每條電纜的末端都有四種種類。 The subscriber connector (SC) is a fiber-optic cable connector that uses a push-pull mechanism to latch into the port, similar to common audio and video cables. If you want to enable bidirectional transmission for sending and receiving data, you need to have two fiber cables, so sometimes a dual SC connector is used. \n \n 用戶連接器（SC） 是一種光纖電纜連接器，類似於普通的音頻和影片電纜，它使用推挽機制鎖入端口。 如果要啟用雙向傳輸以發送和接收數據，則需要兩條光纖電纜，因此有時會使用雙SC連接器。 The straight tip (ST) connector is a fiber-optic cable connector that uses a bayonet plug and socket. It was the first de facto standard connector for most commercial wiring using fiber cables and it is very  commonly found in fiber networks. \n \n 筆直型（ST）連接器 是使用卡口插頭和插座的光纖電纜連接器。它是大多數使用光纖電纜進行商業佈線的第一個實際使用的標準連接器， 並且在光纖網絡中非常常見。 The Lucent connector (LC) is a miniaturized version of the fiber-optic SC connector. It looks somewhat like the SC,  but is half the size, with a 1.25 mm ferrule instead of 2.5 mm, making it very useful when connecting multiple devices in a small area,  such as on a 24-port switch’s front panel. \n 朗訊連接器（LC） 是光纖SC連接器的微型版本。它看上去有點像SC，但尺寸只有一半，只有1.25毫米而不是2.5毫米的芯,因此在小區域（例如使用24端口交換機的前面板）連接多個設備時非常有用。 The mechanical transfer-registered jack (MT-RJ) connector is a fiber-optic cable connector that is very popular for small-form-factor devices due to its small size. This connector houses two fibers and mates with locating pins on the plug. These connectors are commonly  found connecting a switch to a patch panel, because both devices have a limited area on their front panels. \n \n 機械傳輸註冊插孔（MT-RJ）連接器 是一種光纖電纜連接器，由於其尺寸小，在小型設備中非常受歡迎。 該連接器容納兩根光纖，並與插頭上的定位銷配對。 通常這些連接器會將開關連接到配線架，因為兩個設備的前面板都有有限的區域。 \n', 'tags': '', 'url': 'PCH 11 Fiber-Optic-Cable(光纖電纜).html'}, {'title': 'PCH 11\xa0Twisted-Pair-Cable(雙絞線電纜)', 'text': 'learning objectives/學習目標 \n 1. Identify types of network cables and connectors. \n \n 識別網絡電纜和連接器的類型。 2.Categorize characteristics of connectors and cabling. \n \n 分類連接器和電纜的特性。 \n \n START \n While fiber-optic cable is great for its speed, distance, and security, it hasn’t yet become commonplace in most networks. Instead, we are still using the same type of cabling we have been using for the past two to three decades — twisted pair. Twisted pair cable is the most popular physical LAN media in the world today. Each cable contains four pairs of individually insulated strands of copper wire. Each pair is twisted together to minimize the amount of electromagnetic interference (EMI). The more twists there are in the cable, the less EMI there will be. Twisted pair cable is broken up into two types: unshielded twisted pair (UTP) and shielded twisted pair (STP). \n \n \n \n 儘管光纜在速度、距離和安全性方面都非常出色，但在大多數網絡中還尚未普及。 相反的，我們仍在使用過去兩到三十年來一直使用的相同類型的電纜-雙絞線電纜。 雙絞線電纜是當今世界上最流行的 物理媒介 。每條電纜包含四對獨立絕緣的銅線。 每對絞合在一起以最大程度地減少電磁干擾（EMI）。 電纜中的扭曲越多，EMI越小。 雙絞線分為兩種類型：非屏蔽雙絞線（UTP）和屏蔽雙絞線（STP） 。 \n 光纖連接器 \n Shielded twisted pair cable is built very similarly to unshielded twisted pair, except that the pairs of wires are also surrounded by a metallic shielding (like foil). This outer foil shielding minimizes the EMI to which the cable is exposed. This increases the security and reliability of the cable. Unfortunately, however, this also increases the cost of the cable, so it is typically used only in high-production environments where the extra security is worth the extra cost. \n 屏蔽雙絞線電纜的構造與非屏蔽雙絞線非常相似 ，但不同的是，成對的電線也被金屬屏蔽層（如金屬箔）圍繞。 外部的金屬箔屏蔽層可最大程度地減少電纜所遭受的電磁干擾 。這增加了電纜的安全性和可靠性。但是，不幸的是， 這也增加了電纜的成本，因此通常僅在高生產環境中使用 ，在這種情況下，額外的安全性值得額外的成本。 \n The more common type of cabling is unshielded twisted pair cable. Instead of using extra shielding, this cable relies on the twisting of its copper pairs to minimize the effects of EMI. Each twisted pair is twisted to insulate itself from the other pairs, and because there is no additional shielding, it is available at a lower cost than STP. Therefore, UTP is the most common media of choice for small office, home office, residential, and many commercial networks. \n 電纜中最常見的類型是非屏蔽雙絞線電纜 。該電纜不使用額外的屏蔽，而是 依靠其銅線對的絞合來最大程度地減小電磁干擾的影響 。每個雙絞線都經過絞合，以使其自身與其他雙絞線絕緣，並且由於沒有額外的屏蔽，因此 可以以比屏蔽雙絞線電纜更低的成本獲得 。因此，非 屏蔽雙絞線電纜 是小型辦公室，家庭辦公室，住宅和許多商業網絡中最常見的選擇媒介。 \n Unsheathed twisted pair cable(非屏蔽雙絞電纜) \n \n \n \n Categorizing Twisted Pair Cable( 分類雙絞線電纜) \n Twisted pair cable is categorized based on a category (cat) number. For example, cat 3, or category 3, is the oldest type of cable that we use. It was introduced back in the 1980s and 1990s for use in the first star topologies. The maximum throughput or bandwidth of cat 3 cabling is only 10 Mbps (megabits per second). The cat 3, like all twisted pair cabling, cannot go farther than 100 meters without using a repeater, switch, or active hub to amplify the signal. This limited distance is attributable to the copper wiring in these cables. As the signal travels over the copper wire, the natural resistance to the wire decreases the signal’s strength, and it eventually becomes too weak for the distant end to receive. For this reason, there is a 100 meter limitation when building and designing a twisted pair network. \n 雙絞線電纜根據類別編號進行分類。例如, 3 類電纜 （或類別3）是我們使用的最古老的電纜類型 。它是在1980年代和1990年代引入的，用於第一批 星型網。 3類 電纜的最大傳輸量或帶寬僅為10 Mbps（兆位/秒） 。與所有雙絞線電纜一樣，如果不使用中繼器，交換機或有源集線器來放大信號，則 3類電纜 不能走超過100米。這種有限的距離歸因於這些電纜中的銅線。當信號在銅線上傳輸時，導線的電阻會降低信號的強度，最終變得太弱，無法接收到遠端。因此，在構建和設計 雙絞線網絡時存在100米的長度限制 。 \n Cat 5(5類雙膠線電纜) \n Cat 5 cables were an improvement on the older cat 3 cables and contain more twists, giving them more shielding from EMI and a maximum bandwidth of 100 Mbps. Cat 5e, or cat 5 enhanced, increased the speed of the maximum throughput to one Gbps, or 1000 Mbps, and became a gap filler until cat 6 cabling became commonplace. \n 5類雙膠線電纜是對較舊的 3 類 電纜的改進 ，並包含更多的絞合線，從而使它們具有更大的 電磁干擾 屏蔽能力，最大帶寬為100 Mbps。 Cat 5e或5 類雙絞線電纜 增強後，將最大吞吐量的速度提高到1 Gbps或1000 Mbps，並成為了過度品，直到 6類雙絞線 電纜變得司空見慣。 \n Cat 6a overcomes the 37-55 meter limitation of cat 6 when used in 10GBaseT. Cat 7, the newest standard, is shielded and provides connections up to 10 Gbps with a maximum distance of 100 meters. “Cat 7 and cat 7a cabling will be used for backbone connections between servers within a data center” and “provide an alternative to using fiber-optic cabling within the data center” \n 當在10Gb乙太網路中使用時， 超六類雙膠線電纜 克服了6 類雙膠線電纜 的37-55米的限制。 最新標準7類雙膠線電纜被屏蔽，並提供高達10 Gbps的連接，最大距離為100米 。 7類 雙膠線電纜 和 超7類 雙膠線 電纜將用於數據中心內服務器之間的骨干連接，並提供在數據中心內使用光纖電纜的替代方案。 \n All cable categories up to cat 5e and cat 6a have a maximum distance of 100 meters. When used in 10GBaseT, the maximum distance for cat 6 is 55 meters. Cat 7 is shielded and exceeds the 100 meter limit. As the category of the cable increases, so do the number of twists per inch and the frequency range, allowing for more data and improved protection against EMI. Best practice for copper cabling is not to run cable lengths to the maximum because attenuation will reduce data capacity. \n \n 直至Cat 5e和Cat 6a為止的所有電纜類別的最大距離為100米。在10GBaseT中使用時， Cat 6 的最大距離為55米。 Cat 7被屏蔽並超過100米的限制。隨著電纜類別的增加，每英寸的捻數和頻率範圍也會增加，從而可以提供更多的數據並改善對電磁脈衝的保護。銅纜佈線的最佳實踐是不要使電纜長度變大，因為會衰減降低數據的容量。 \n \n \n \n Twisted Pair Connectors( 雙絞線連接器) \n Twisted pair cables come with three main types of connectors. The first is the RJ-45 connector, which is an eight-pin connector used in Ethernet networks. Even though most Ethernet networks use only four pins, the RJ-45 provides eight pins for future use and capabilities. The first four pins are used to transmit (two pins) and receive (two pins). \n 雙絞線電纜帶有三種主要類型的連接器。第一個是RJ-45連接器，它是以太網網絡中使用的八針連接器。即使大多數以太網僅使用四個引腳，RJ-45仍提供八個引腳以供將來使用。前四個引腳用於發送（兩個引腳）和接收（兩個引腳）。 \n \n \n The RJ-11 connector is used in the standard telephone system. The RJ-11 is a six-pin connector, but commonly only two pins are used for a telephone (transmit and receive). If you have a two-line phone, then four pins are used: two pins to transmit and two pins to receive. \n \n RJ-11連接器用於標準電話系統。 RJ-11是一個六針連接器，但電話通常僅使用兩個針腳（用於發送和接收）。如果您有兩線電話，則會使用四個引腳：兩個引腳用於發送，兩個引腳用於接收。\n \n \n Finally, the DB-9 connector is used for RS-232 signals. This connector looks like a standard serial connector. It is used commonly for asynchronous serial communications, like connecting to an external modem. In modern networks, you will see this type of connector on a “rollover cable.” A rollover cable has a DB-9 on one side (which is connected to your laptop’s serial port), and an RJ-45 connector on the other side (which is used to connect to Cisco routers and switches to do administration tasks). \n 最後，DB-9連接器用於RS-232信號。該連接器看起來像標準的串行連接器。它通常用於異步串行通信，例如連接到外部調製解調器。在現代網絡中，您將在“翻轉電纜”上看到這種類型的連接器。翻轉電纜的一側為DB-9（連接到筆記本電腦的串行端口），另一側為RJ-45連接器（用於連接到Cisco路由器和交換機以執行管理任務）。 \n A straight-through cable is a type of twisted pair cable that is used in local area networks to connect a computer to a network hub, such as a router. This type of cable is also sometimes called a patch cable. Both ends of the cable have an identical pinout, hence the name “straight-through.” A crossover cable switches the pinouts of the two ends of the cable, making the transmit and receive pins alternate on the two ends. This allows two workstations to connect directly to each other without the need for a hub, switch, or router. \n 直通電纜是雙絞線電纜的一種，在局域網中用於將計算機連接到網絡集線器（例如路由器）。這種類型的電纜有時也稱為跳線。電纜的兩端都具有相同的引出線，因此被稱為“直通”。交叉電纜切換電纜兩端的引腳分配，使發送和接收引腳在兩端交替。這允許兩個工作站直接相互連接，而無需集線器 、交換機或路由器。 \n \n', 'tags': '', 'url': 'PCH 11\xa0Twisted-Pair-Cable(雙絞線電纜).html'}, {'title': 'PCH 11\xa0Coaxial-Cable(同軸電纜)', 'text': 'learning objectives/學習目標 \n 識別網絡電纜和連接器的類型。 \n Coaxial cable is a much older media technology. Coaxial cable, also known as coax for short, is composed of two conductors. The inner conductor, which is known as the insulated conductor (center wire), is the copper wire over which data is passed. The outer conductor is the braided metal shield and aids in protecting the inner wire from physical injury and the effects of EMI. Much like the shielding we saw in shielded twisted pair, the outer shield helps keep electromagnetic interference out of the data’s path. Between the inner conductor and the outer shield, we find an insulated core that prevents any data transfer between the inner core and outer shield. The outside of the cable is made of a flexible plastic jacket, much like the twisted pair cabling. Coaxial cabling was included in the first Ethernet standard as 10Base5 (thicknet) and continued to be used throughout updates as 10Base2 (thinnet) as well as being most commonly used in bus and ring networks. UTP cabling however, is easier to work with in a star topology and is significantly less expensive. \n 同軸電纜是一種較老的媒體技術。同軸電纜（也簡稱為同軸電纜）由兩個導體組成。內部導體（稱為絕緣導體（中心線）)是其上傳數據的銅線。外導體是編織的金屬屏蔽層，有助於保護內線免受傷害和電磁干擾的影響。就像我們在屏蔽雙絞線中看到的屏蔽層一樣，外部屏蔽有助於將電磁干擾排除在數據路徑之外。在內部導體和外部屏蔽層之間，我們找到了一個絕緣芯，可防止在內芯和外部屏蔽層之間進行任何數據傳輸。電纜的外部由柔軟的塑膠護套製成，非常類似於雙絞線電纜。同軸電纜已包含在第一個以太網標準中，稱為10Base5（Thicknet），並在整個更新中繼續用作10Base2（Thinnet），並且在總線和環形網絡中最常用。但是， 非屏蔽雙絞線 電纜更容易在星形網中使用，且價格便宜得多。 \n \n \n \n \n \n \n \n \n \n \xa0 \n \n \n \n \n \n \n \xa0 \n \n \xa0 \n \n \n \xa0 \n \xa0 \n \n \n \xa0 \n \xa0 \n \n \n \n', 'tags': '', 'url': 'PCH 11\xa0Coaxial-Cable(同軸電纜).html'}]};