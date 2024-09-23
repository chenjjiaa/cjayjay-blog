"use strict";(self.webpackChunkcjayjay_blog=self.webpackChunkcjayjay_blog||[]).push([[487],{6262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},9400:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>p,data:()=>d});var e=a(641),i=a(33);const l={},p=(0,a(6262).A)(l,[["render",function(n,s){const a=(0,e.g2)("VPCard");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Q3)(" more "),s[0]||(s[0]=(0,e.Fv)('<h1 id="通过-pod-id-找到-ip-netns-对应的网络命名空间" tabindex="-1"><a class="header-anchor" href="#通过-pod-id-找到-ip-netns-对应的网络命名空间"><span>通过 pod_id 找到 ip netns 对应的网络命名空间</span></a></h1><h2 id="如何拿到-pod-对应的-netns" tabindex="-1"><a class="header-anchor" href="#如何拿到-pod-对应的-netns"><span>如何拿到 pod 对应的 netns ？</span></a></h2><p>我发现要通过 Pod IP 来获取到该 Pod 对应的 netns 比较麻烦，要通过以下步骤才能拿到</p><p>首先拿到 Pod 的 IP（当然这得自己用命令来查）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cjj@cjj-workspace ~&gt; kubectl get pods -o wide</span></span>\n<span class="line"><span>NAME                READY    STATUS    RESTARTS        AGE   IP                NODE            NOMINATED NODE   READINESS GATES</span></span>\n<span class="line"><span>kafka-0              1/1     Running   2 (8d ago)      8d    172.16.0.15       cjj-workspace   &lt;none&gt;           &lt;none&gt;</span></span>\n<span class="line"><span>kafka-1              1/1     Running   2 (8d ago)      8d    172.16.0.17       cjj-workspace   &lt;none&gt;           &lt;none&gt;</span></span>\n<span class="line"><span>kafka-2              1/1     Running   2 (8d ago)      8d    172.16.0.19       cjj-workspace   &lt;none&gt;           &lt;none&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个网络命名空间可以通过 ip netns 来获取</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cjj@cjj-workspace ~ [1]&gt; ip netns</span></span>\n<span class="line"><span>cni-2180b3ea-73e3-5960-40a5-0e5f792f7530 (id: 115)</span></span>\n<span class="line"><span>cni-b33d0d90-b4a5-6345-e0c3-4e8758d982c1 (id: 119)</span></span>\n<span class="line"><span>cni-afe4707f-873e-0aae-b727-c7fb37f375d2 (id: 123)</span></span>\n<span class="line"><span>cni-7b510e34-db96-8826-1f08-df4f12fda1ac (id: 117)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后可以通过 <code>sudo ip netns exec &lt;netns&gt; ip a</code>，来获取到该 pod 的 ip，这样子就能对应上了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cjj@cjj-workspace ~&gt; sudo ip netns exec cni-4d4ca41b-b10c-6955-6a8a-07f5b039e048 ip a</span></span>\n<span class="line"><span>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000</span></span>\n<span class="line"><span>    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>\n<span class="line"><span>    inet 127.0.0.1/8 scope host lo</span></span>\n<span class="line"><span>       valid_lft forever preferred_lft forever</span></span>\n<span class="line"><span>    inet6 ::1/128 scope host</span></span>\n<span class="line"><span>       valid_lft forever preferred_lft forever</span></span>\n<span class="line"><span>249: eth0@if250: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 9000 qdisc noqueue state UP group default</span></span>\n<span class="line"><span>    link/ether 88:66:ac:10:00:7b brd ff:ff:ff:ff:ff:ff link-netnsid 0</span></span>\n<span class="line"><span>    inet 172.16.0.123/24 brd 172.16.0.255 scope global eth0</span></span>\n<span class="line"><span>       valid_lft forever preferred_lft forever</span></span>\n<span class="line"><span>    inet6 fe80::8a66:acff:fe10:7b/64 scope link</span></span>\n<span class="line"><span>       valid_lft forever preferred_lft forever</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写个脚本" tabindex="-1"><a class="header-anchor" href="#写个脚本"><span>写个脚本</span></a></h2><blockquote><p><strong>不会偷懒的码农不是好程序员</strong></p></blockquote><p>输入：Pod 的 IP（我们可以通过 kubectl get pods -o wide 来获取）</p><p>输出：这个 Pod IP 对应的 netns（类似：cni-101ef36d-7d42-beef-4ecc-0b28decf0833）</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>新建 <code>find_pod_netns.sh</code> 文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vim find_pod_netns.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>把下面这段 shell 复制到 <code>find_pod_netns.sh</code> 文件中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 检查是否提供了Pod IP</span></span>\n<span class="line"><span>if [ -z &quot;$1&quot; ]; then</span></span>\n<span class="line"><span>  echo &quot;Usage: $0 &lt;pod_ip&gt;&quot;</span></span>\n<span class="line"><span>  exit 1</span></span>\n<span class="line"><span>fi</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>POD_IP=$1</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 获取所有网络命名空间</span></span>\n<span class="line"><span>NETNS_LIST=$(ip netns list | awk &#39;{print $1}&#39;)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 遍历每个网络命名空间</span></span>\n<span class="line"><span>for NETNS in $NETNS_LIST; do</span></span>\n<span class="line"><span>  # 在当前网络命名空间中获取所有IP地址</span></span>\n<span class="line"><span>  IP_ADDRESSES=$(sudo ip netns exec $NETNS ip a | grep &#39;inet &#39; | awk &#39;{print $2}&#39; | cut -d&#39;/&#39; -f1)</span></span>\n<span class="line"><span>  </span></span>\n<span class="line"><span>  # 检查是否有IP地址与Pod IP匹配</span></span>\n<span class="line"><span>  for IP in $IP_ADDRESSES; do</span></span>\n<span class="line"><span>    if [ &quot;$IP&quot; == &quot;$POD_IP&quot; ]; then</span></span>\n<span class="line"><span>      echo &quot;Pod IP $POD_IP is in network namespace: $NETNS&quot;</span></span>\n<span class="line"><span>      exit 0</span></span>\n<span class="line"><span>    fi</span></span>\n<span class="line"><span>  done</span></span>\n<span class="line"><span>done</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 如果没有找到匹配的网络命名空间</span></span>\n<span class="line"><span>echo &quot;No matching network namespace found for Pod IP $POD_IP&quot;</span></span>\n<span class="line"><span>exit 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>chmod +777 find_pod_netns.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行脚本即可：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>./find_pod_netns.sh &lt;pod_ip&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="一个-ip-可能对应多个-netns-罗列全部-netns" tabindex="-1"><a class="header-anchor" href="#一个-ip-可能对应多个-netns-罗列全部-netns"><span>一个 ip 可能对应多个 netns，罗列全部 netns</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vim find_pod_all_netns.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 检查是否提供了Pod IP</span></span>\n<span class="line"><span>if [ -z &quot;$1&quot; ]; then</span></span>\n<span class="line"><span>  echo &quot;Usage: $0 &lt;pod_ip&gt;&quot;</span></span>\n<span class="line"><span>  exit 1</span></span>\n<span class="line"><span>fi</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>POD_IP=$1</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 获取所有网络命名空间</span></span>\n<span class="line"><span>NETNS_LIST=$(ip netns list | awk &#39;{print $1}&#39;)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 记录匹配的网络命名空间</span></span>\n<span class="line"><span>MATCHING_NETNS=()</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 遍历每个网络命名空间</span></span>\n<span class="line"><span>for NETNS in $NETNS_LIST; do</span></span>\n<span class="line"><span>  # 在当前网络命名空间中获取所有IP地址</span></span>\n<span class="line"><span>  IP_ADDRESSES=$(sudo ip netns exec $NETNS ip a | grep &#39;inet &#39; | awk &#39;{print $2}&#39; | cut -d&#39;/&#39; -f1)</span></span>\n<span class="line"><span>  </span></span>\n<span class="line"><span>  # 检查是否有IP地址与Pod IP匹配</span></span>\n<span class="line"><span>  for IP in $IP_ADDRESSES; do</span></span>\n<span class="line"><span>    if [ &quot;$IP&quot; == &quot;$POD_IP&quot; ]; then</span></span>\n<span class="line"><span>      MATCHING_NETNS+=($NETNS)</span></span>\n<span class="line"><span>    fi</span></span>\n<span class="line"><span>  done</span></span>\n<span class="line"><span>done</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 输出匹配的网络命名空间</span></span>\n<span class="line"><span>if [ ${#MATCHING_NETNS[@]} -eq 0 ]; then</span></span>\n<span class="line"><span>  echo &quot;No matching network namespace found for Pod IP $POD_IP&quot;</span></span>\n<span class="line"><span>else</span></span>\n<span class="line"><span>  echo &quot;Pod IP $POD_IP is in the following network namespaces:&quot;</span></span>\n<span class="line"><span>  for NETNS in &quot;${MATCHING_NETNS[@]}&quot;; do</span></span>\n<span class="line"><span>    echo &quot;$NETNS&quot;</span></span>\n<span class="line"><span>  done</span></span>\n<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',25)),(0,e.bF)(a,(0,i._B)((0,e.Ng)({title:"chenjjiaa",desc:"沉浸在万花筒的幻术之中吧...",logo:"./github-logo.jpg",link:"https://github.com/chenjjiaa",background:"rgba(253, 230, 138, 0.15)"})),null,16)])}]]),d=JSON.parse('{"path":"/posts/%E9%80%9A%E8%BF%87%20pod_id%20%E6%89%BE%E5%88%B0%20ip%20netns%20%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BD%91%E7%BB%9C%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4.html","title":"通过 pod_id 找到 ip netns 对应的网络命名空间","lang":"zh-CN","frontmatter":{"cover":"./177c9d9baee1548b.jpg","date":"2024-08-10T00:00:00.000Z","category":["无"],"tag":["后端","kubernetes"],"excerpt":"<p>步骤有点繁琐，所以写了个脚本。</p>"},"headers":[{"level":2,"title":"如何拿到 pod 对应的 netns ？","slug":"如何拿到-pod-对应的-netns","link":"#如何拿到-pod-对应的-netns","children":[]},{"level":2,"title":"写个脚本","slug":"写个脚本","link":"#写个脚本","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[{"level":3,"title":"一个 ip 可能对应多个 netns，罗列全部 netns","slug":"一个-ip-可能对应多个-netns-罗列全部-netns","link":"#一个-ip-可能对应多个-netns-罗列全部-netns","children":[]}]}],"git":{"createdTime":1727105565000,"updatedTime":1727105565000,"contributors":[{"name":"chenjjiaa","email":"chenjjiaa@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":831},"filePathRelative":"posts/通过 pod_id 找到 ip netns 对应的网络命名空间.md","localizedDate":"2024年8月10日"}')}}]);