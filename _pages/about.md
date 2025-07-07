---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a 4th year (2021-) Ph.D. candidate at [Robotics, Embodied AI, and Navigation In-vivo Lab](http://www.labren.org/mm/), [Department of Electronic Engineering](http://www.ee.cuhk.edu.hk/en-gb/), [The Chinese University of Hong Kong](https://www.cuhk.edu.hk/), supervised by [Prof. Hongliang Ren](https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-ren-hongliang). Previously, I was an Embedded Software Engineer at [Continental Automotive](https://www.continental-automotive.com/) in Singapore. Before that, I worked with [Prof. Chengkuo Lee](https://www.ece.nus.edu.sg/stfpage/elelc/bio.html) in the [Department of Electrical and Computer Engineering](https://cde.nus.edu.sg/ece/), [National University of Singapore](https://www.nus.edu.sg/) and received my M.Sc. degree in 2019. From 2014 to 2018, I studied at [Soochow University](https://www.suda.edu.cn/) and received B.Eng. degree in Information Engineering. 

My research focuses on efficient & robust medical image analysis and intelligent robotic surgery. I am recently interested in Visual Foundation Models, Multi-modal LLM, and Embodied AI. 
I am always open to discussions and collaborations, so please feel free to reach out to me via email if you have any questions or would like to explore potential collaborations.

<!--
I am honored to have the opportunity to collaborate with [Dr. Hao Wang](https://scholar.google.com.sg/citations?user=wwIAQ_4AAAAJ&hl), [Dr. Mobarakol Islam](https://mobarakol.github.io/) and [Prof. Yang Zhang](https://yangzhangcst.github.io/Homepage/).
-->

# 🔥 News
- *2025.06*: One paper on semi-supervised polyp segmentation is accepted by Computerized Medical Imaging and Graphics (CMIG).
- *2025.03*: Two papers on ESD Dissection Trajectory Prediction and Dissection Zone Segmentation are accepted at ICRA 2025 and IPCAI 2025, respectively. 
- *2024.10*: Two papers on vision-guided robotic surgery have been accepted at IEEE ROBIO 2024. 
- *2024.08*: One paper "Benchmarking Robustness of Endoscopic Depth Estimation with Synthetically Corrupted Data" has been accepted at the Simulation and Synthesis in Medical Imaging (SASHIMI) workshop at MICCAI 2024.
- *2023.08*: Our paper "SAM Meets Robotic Surgery: An Empirical Study on Generalization, Robustness and Adaptation" has been accepted as an Oral Presentation at the MedAGI workshop, MICCAI 2023.
- *2023.06*: Our paper "Generalizing Surgical Instruments Segmentation to Unseen Domains with One-to-Many Synthesis" is accepted by IROS-2023.
- *2023.06*: One paper about robust medical image segmentation is accepted by IEEE Transactions on Automation Science and Engineering.
- *2023.05*: One paper about annotation-efficient polyp segmentation was early accepted by MICCAI-2023.
- *2022.06*: One paper about synthetic data generation from limited sources is accepted by MICCAI-2022.

# 📝 Publications
*: First author; **: Corresponding author

[Full list](https://scholar.google.com.hk/citations?user=NYWnE6QAAAAJ&hl).

## Conference Papers

**Benchmarking Robustness of Endoscopic Depth Estimation with Synthetically Corrupted Data**

An Wang\*, Haochen Yin, Beilei Cui, Mengya Xu, and Hongliang Ren\*\*

MICCAI 2024 Simulation and Synthesis in Medical Imaging (SASHIMI) Workshop

[arxiv](https://arxiv.org/abs/2409.16063) \| [Springer](https://link.springer.com/chapter/10.1007/978-3-031-73281-2_5) \| [code](https://github.com/lofrienger/EndoDepthBenchmark)

---

**Web-based Augmented Reality with Auto-Scaling and Real-Time Head Tracking towards Markerless Neurointerventional Preoperative Planning and Training of Head-mounted Robotic Needle Insertion**

Hon Lung Ho\*, Yupeng Wang\*, An Wang\*, Long Bai, and Hongliang Ren\*\*

IEEE ROBIO 2024

[arxiv](https://arxiv.org/abs/2411.02410) \| [website](https://wyp41.github.io/webxr/) \| [code](https://github.com/Hillllllllton/skullbot_web_ar) \| [demo](https://hillllllllton.github.io/fyp_AR/)

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI-2023</div><img src='images/miccai2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**S$^2$ME: Spatial-Spectral Mutual Teaching and Ensemble Learning for Scribble-supervised Polyp Segmentation**

An Wang\*, Mengya Xu, Yang Zhang, Mobarakol Islam, and Hongliang Ren\*\*
  
MICCAI-2023 Early Accepted (Top 14% among 2253 submissions). 

[arXiv](https://arxiv.org/abs/2306.00451) \| [code](https://github.com/lofrienger/S2ME) \| [poster](https://drive.google.com/file/d/1vgqNK3Q1L7yWhPzLO0Mg2N21v6FCzUwF/view?usp=sharing) \| [video](https://drive.google.com/file/d/1coswqbqErDNZ2RWcFITbqdF1eTMSwj_Z/view?usp=sharing) \| [ppt](https://drive.google.com/file/d/1SReVhwta4P1MWU-R_1T3PVb4mECs76KF/view?usp=sharing)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS-2023</div><img src='images/iros2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Generalizing Surgical Instruments Segmentation to Unseen Domains with One-to-Many Synthesis**

An Wang\*, Mobarakol Islam\*, Mengya Xu, and Hongliang Ren\*\*
  
IROS-2023

[arXiv](https://arxiv.org/abs/2306.16285) \| [code](https://github.com/lofrienger/OneToMany_ToolSynSeg) \| [poster](https://drive.google.com/file/d/1sa4lG37_aVikBoxduQEuBpvaibr7dgMg/view?usp=sharing) \| [video](https://drive.google.com/file/d/1RxS6Eo_LQe-zxzNh1g8UdYa4HbTBKgR5/view?usp=sharing) \| [ppt](https://drive.google.com/file/d/1KsgfVg0dsiZJXWr3NtdwKk74cakWB02v/view?usp=sharing)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI-2022</div><img src='images/miccai2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Rethinking Surgical Instrument Segmentation: A Background Image Can Be All You Need**

An Wang\*, Mobarakol Islam\*, Mengya Xu, and Hongliang Ren\*\*
  
MICCAI-2022

[arXiv](https://arxiv.org/abs/2206.11804) \| [Springer](https://link.springer.com/chapter/10.1007/978-3-031-16449-1_34) \| [code](https://github.com/lofrienger/Single_SurgicalScene_For_Segmentation) \| [ppt](https://drive.google.com/file/d/17ihJ-71i4q0JhyS9NXMumwF8zcv12MDQ/view?usp=sharing) \| [poster](https://drive.google.com/file/d/1QRT_dCqWHWtVmCNoOISBCd7PM6EpQ9gs/view?usp=sharing) \| [video](https://drive.google.com/file/d/1N-RjGmJg1BIGrbxtASwoULtFQ76ZPU2S/view?usp=sharing)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MedAGI Workshop</div><img src='images/medagi.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**SAM Meets Robotic Surgery: An Empirical Study on Generalization, Robustness and Adaptation**

An Wang\*, Mobarakol Islam\*, Mengya Xu, Yang Zhang, and Hongliang Ren\*\*
  
Oral, MICCAI 2023 1st International Workshop on Foundation Models for General Medical AI. 

[arXiv](https://arxiv.org/abs/2308.07156) \| [poster](https://drive.google.com/file/d/1ZemCaFwFIJzV-_LXYf9uMZz9W8TE2bp3/view?usp=sharing) \| [ppt](https://drive.google.com/file/d/1kWFa162kgfvEGGvGUOsvKK7BY9eeN691/view?usp=sharing)

</div>
</div>


## Journal Papers

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMIG</div><img src='images/pedsemiseg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**PedSemiSeg: Pedagogy-inspired semi-supervised polyp segmentation**

An Wang, Haoyu Ma, Long Bai, Yanan Wu, Mengya Xu, Yang Zhang, Mobarakol Islam, Hongliang Ren\*\*

Computerized Medical Imaging and Graphics (CMIG) 2025

[Paper](https://doi.org/10.1016/j.compmedimag.2025.102591) \| [code](https://github.com/lofrienger/PedSemiSeg)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE T-ASE</div><img src='images/curri-afda.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**Curriculum-Based Augmented Fourier Domain Adaptation for Robust Medical Image Segmentation**

An Wang\*, Mobarakol Islam\*, Mengya Xu\*, and Hongliang Ren\*\*

IEEE Transactions on Automation Science and Engineering (T-ASE) 2023

[arXiv](https://arxiv.org/abs/2306.03511) \| [IEEE](https://ieeexplore.ieee.org/document/10190316) \| [code](https://github.com/lofrienger/Curri-AFDA)

</div>
</div>

**Surgical-VQLA++: Adversarial contrastive learning for calibrated robust visual question-localized answering in robotic surgery**

Long Bai, Guankun Wang, Mobarakol Islam, Lalithkumar Seenivasan, An Wang, Hongliang Ren

Information Fusion, 2024 [paper](https://www.sciencedirect.com/science/article/pii/S1566253524003804) \| [code](https://github.com/longbai1006/Surgical-VQLAPlus)


## Preprints

**SAM 2 in Robotic Surgery: An Empirical Evaluation for Robustness and Generalization in Surgical Video Segmentation**

Jieming Yu, An Wang, Wenzhen Dong, Mengya Xu, Mobarakol Islam, Jie Wang, Long Bai, Hongliang Ren

[arxiv](https://arxiv.org/abs/2408.04593)

**Endo-TTAP: Robust Endoscopic Tissue Tracking via Multi-Facet Guided Attention and Hybrid Flow-point Supervision**

Rulin Zhou\*, Wenlong He\*, An Wang\*, Qiqi Yao, Haijun Hu, Jiankun Wang, Xi Zhang and Hongliang Ren\*\*

[IEEE RAL](https://arxiv.org/abs/xxx) (In submission)

**VL-SurgPT: Bridging Vision and Language for Robust Surgical Point Tracking**

Rulin Zhou\*, Wenlong He\*, An Wang\*, Xuanhui Zeng, Jianhang Zhang, Xi Zhang, Chaowei Zhu, Haijun Hu\*\*, and Hongliang Ren\*\*

[ACM MM Dataset](https://arxiv.org/abs/xxx) (Under Review)

**EndoControlMag: Robust Endoscopic Vascular Motion Magnification with Periodic Reference Resetting and Hierarchical Tissue-aware Dual-Mask Control**

An Wang\*, Rulin Zhou\*, Mengya Xu\*, Yiru Ye, Longfei Gou, Yiting Chang, Hao Chen, Chwee Ming Lim, Jiankun Wang, Hongliang Ren\*\*

[Medical Image Analysis](https://arxiv.org/abs/xxx) (Under Review)

## Book Chapter

**3D Reconstruction of Deformable Tissues in Robotic Surgery**

Mengya Xu, Tiebing Tang, Ziqi Guo, An Wang, Beilei Cui, Long Bai, Hongliang Ren

[Handbook of Robotic Surgery](https://www.sciencedirect.com/science/article/pii/B9780443132711000571), 2024


# 🎖 Honors and Awards
- *2024.09*, SUSTech Fellowship
- *2018.06*, Excellent Graduate of Soochow University


# 📖 Educations
- *2021.10 - now*, Ph.D. Candidate, Electronic Engineering, The Chinese University of Hong Kong, Hong Kong SAR, China
- *2018.08 - 2019.06*, M.Sc., Electrical Engineering, National University of Singapore, Singapore
- *2014.09 - 2018.06*, B.Eng., Information Engineering, Soochow University, Suzhou, China

<!--
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
-->

# 💻 Teaching Assistant
- Embedded Systems Design, 2024.09 - 2024.12
- Intelligent Interactive Robot Practice, 2024.01 - 2024.05
- Intelligent Wearable Electronics, 2023.01 - 2023.05
- Probability for Engineers, 2021.09 - 2021.12, 2022.09 - 2022.12, 2023.09 - 2023.12
- Robotic Perception and Intelligence, 2022.01 - 2022.05
