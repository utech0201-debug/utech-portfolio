export type VideoCategory = "Networking" | "Cybersecurity" | "Hardware";

export type LearningVideo = {
  id: number;
  slug: string;
  title: string;
  category: VideoCategory;
  level: "Beginner" | "Intermediate";
  description: string;
  video: string;
};

export const learningVideos: LearningVideo[] = [
  {
    id: 1,
    slug: "osi-model-explained",
    title: "OSI Model Explained",
    category: "Networking",
    level: "Beginner",
    description:
      "A visual introduction to the seven layers of the OSI model and how they work together in network communication.",
    video: "/videos/osi.mp4",
  },

  {
    id: 2,
    slug: "ddos-attack",
    title: "DDoS Attack",
    category: "Cybersecurity",
    level: "Beginner",
    description:
      "An introduction to Distributed Denial-of-Service attacks and how overwhelming traffic can affect network availability.",
    video: "/videos/ddos.mp4",
  },

  {
    id: 3,
    slug: "tcp-ip-model-explained",
    title: "TCP/IP Model Explained",
    category: "Networking",
    level: "Beginner",
    description:
      "A clean visual explanation of the TCP/IP model and the layers responsible for communication across modern networks.",
    video: "/videos/tcp-ip.mp4",
  },

  {
    id: 4,
    slug: "border-gateway-protocol-bgp",
    title: "Border Gateway Protocol (BGP)",
    category: "Networking",
    level: "Intermediate",
    description:
      "An introduction to BGP and its role in exchanging routing information between autonomous systems on the Internet.",
    video: "/videos/bgp.mp4",
  },

  {
    id: 5,
    slug: "viruses-vs-malware",
    title: "Viruses vs Malware",
    category: "Cybersecurity",
    level: "Beginner",
    description:
      "Understand the relationship between computer viruses and the broader category of malicious software known as malware.",
    video: "/videos/virus-malware.mp4",
  },

  {
    id: 6,
    slug: "gre-tunnel",
    title: "GRE Tunnel",
    category: "Networking",
    level: "Intermediate",
    description:
      "A visual introduction to Generic Routing Encapsulation and how tunneling can carry network traffic across another network.",
    video: "/videos/gre.mp4",
  },

  {
    id: 7,
    slug: "vpn-vs-proxy",
    title: "VPN vs Proxy",
    category: "Cybersecurity",
    level: "Beginner",
    description:
      "Compare VPNs and proxies and understand the fundamental differences in how they handle network traffic.",
    video: "/videos/vpn-proxy.mp4",
  },

  {
    id: 8,
    slug: "static-routing-packet-forwarding",
    title: "Static Routing & Packet Forwarding",
    category: "Networking",
    level: "Intermediate",
    description:
      "A visual walkthrough of how routers use static routes to determine where packets should be forwarded.",
    video: "/videos/static-routing.mp4",
  },

  {
    id: 9,
    slug: "http-vs-https",
    title: "HTTP vs HTTPS",
    category: "Cybersecurity",
    level: "Beginner",
    description:
      "Learn the difference between HTTP and HTTPS and why encrypted communication is important on the modern web.",
    video: "/videos/http-https.mp4",
  },

  {
    id: 10,
    slug: "computer-network-topology",
    title: "Computer Network Topology",
    category: "Networking",
    level: "Beginner",
    description:
      "Explore common network topologies and how different devices can be arranged within a network.",
    video: "/videos/topology.mp4",
  },

  {
    id: 11,
    slug: "bandwidth-vs-speed",
    title: "Bandwidth vs Speed",
    category: "Networking",
    level: "Beginner",
    description:
      "Understand the difference between bandwidth and network speed using simple visual explanations.",
    video: "/videos/bandwidth-speed.mp4",
  },

  {
    id: 12,
    slug: "cpu-vs-gpu",
    title: "CPU vs GPU",
    category: "Hardware",
    level: "Beginner",
    description:
      "Understand the different roles of CPUs and GPUs and the types of workloads they are designed to handle.",
    video: "/videos/cpu-gpu.mp4",
  },

  {
    id: 13,
    slug: "dhcp",
    title: "DHCP Explained",
    category: "Networking",
    level: "Beginner",
    description:
      "Learn how DHCP automatically provides devices with network configuration information such as IP addresses.",
    video: "/videos/dhcp.mp4",
  },

  {
    id: 14,
    slug: "malware-vs-spyware",
    title: "Malware vs Spyware",
    category: "Cybersecurity",
    level: "Beginner",
    description:
      "Understand spyware and how it relates to the wider category of malicious software.",
    video: "/videos/malware-spyware.mp4",
  },

  {
    id: 15,
    slug: "ram-vs-rom",
    title: "RAM vs ROM",
    category: "Hardware",
    level: "Beginner",
    description:
      "Learn the fundamental differences between RAM and ROM and how each type of memory is used in computing.",
    video: "/videos/ram-rom.mp4",
  },
];

export const videoCategories: Array<"All" | VideoCategory> = [
  "All",
  "Networking",
  "Cybersecurity",
  "Hardware",
];
