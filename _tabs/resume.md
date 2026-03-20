---
layout: page
title: Resume
icon: fa-regular fa-file
order: 4
---

<div class="d-flex justify-content-between align-items-center mb-4">
  <h1 class="mb-0">Jian Song</h1>
  <a href="/assets/file/Jian_Song_Resume.pdf" target="_blank" class="btn btn-outline-primary shadow-sm">
    <i class="fas fa-download me-2"></i>Download PDF
  </a>
</div>

<div class="contact-info mb-4 text-muted" style="font-size: 0.95rem;">
  <i class="fas fa-envelope me-1"></i>
  <a href="#" id="email-link">jian.song [AT] ucdenver [DOT] edu</a>
  <script>
    (function() {
      var user = "jian.song";
      var domain = "ucdenver.edu";
      var link = document.getElementById("email-link");
      link.href = "mailto:" + user + "@" + domain;
    })();
  </script>
  &nbsp; | &nbsp; 
  <i class="fas fa-globe me-1"></i><a href="https://lockfaiz.github.io" target="_blank">Portfolio</a><br>
  <i class="fab fa-github me-1"></i><a href="https://github.com/LockFaiz" target="_blank">GitHub</a> &nbsp; | &nbsp; 
  <i class="fab fa-x-twitter me-1"></i><a href="https://twitter.com/RPJSong" target="_blank">Twitter</a> &nbsp; | &nbsp; 
  <i class="fas fa-map-marker-alt me-1"></i>Denver, CO, USA
</div>

---

## <i class="fas fa-microscope me-2 text-primary"></i>RESEARCH INTERESTS
- **Robotics physical interaction modeling** and sim-to-real dynamics.
- **Physically reliable world models** and vision-language-action systems.
- **Event-driven 3D perception** with event cameras and point clouds.
- **Spiking neural networks** for efficient perception and control.

---

## <i class="fas fa-graduation-cap me-2 text-primary"></i>EDUCATION

<div class="d-flex justify-content-between mb-1">
  <strong>University of Colorado Denver</strong>
  <span class="text-muted">2025 – Present</span>
</div>
<div class="d-flex justify-content-between mb-2 italic">
  <span>PhD Student, Computer Science and Information Systems</span>
  <span class="text-muted small">Denver, CO, USA</span>
</div>
<div class="mb-3 small">
  ◦ PhD Advisor: <a href="https://cse.ucdenver.edu/~lizheng/" target="_blank">Professor Zhengxiong Li</a>
</div>

<div class="d-flex justify-content-between mb-1">
  <strong>The University of Edinburgh</strong>
  <span class="text-muted">Sept. 2021 – Oct. 2022</span>
</div>
<div class="d-flex justify-content-between mb-3 italic">
  <span>Master of Science, Drug Discovery and Translational Biology</span>
  <span class="text-muted small">Edinburgh, UK</span>
</div>

<div class="d-flex justify-content-between mb-1">
  <strong>Central China Normal University</strong>
  <span class="text-muted">Sept. 2017 – June 2021</span>
</div>
<div class="d-flex justify-content-between italic">
  <span>Bachelor of Science, Biotechnology</span>
  <span class="text-muted small">Wuhan, China</span>
</div>

---

## <i class="fas fa-book me-2 text-primary"></i>PUBLICATIONS
1. **Jian Song**, Xiangfei Yang, Shangke Lyu, Donglin Wang (2025). **Activation-wise Propagation: A One-Timestep Strategy for Spiking Neural Networks**. *AAAI Conference on Artificial Intelligence*, 2026.
2. Xiangfei Yang, **Jian Song**, Xuetao Zhang, Donglin Wang (2024). **Adaptive Spiking TD3+BC for Offline-to-Online Spiking Reinforcement Learning**. *International Joint Conference on Neural Networks*, pp. 1–6. IEEE. DOI: [10.1109/IJCNN60899.2024.10650965](https://doi.org/10.1109/IJCNN60899.2024.10650965).
3. **Jian Song**, Xiangfei Yang, Donglin Wang (2024). **Calibrating the Converted Spiking Reinforcement Learning**. *International Conference on Intelligent Computing*, pp. 419–431. Springer Nature Singapore. DOI: [10.1007/978-981-97-5581-3_34](https://doi.org/10.1007/978-981-97-5581-3_34).

---

## <i class="fas fa-laptop-code me-2 text-primary"></i>RESEARCH EXPERIENCE

<div class="d-flex justify-content-between mb-1">
  <strong>Machine Intelligence Lab, Westlake University</strong>
  <span class="text-muted">Jan. 2023 – Nov. 2025</span>
</div>
<div class="d-flex justify-content-between mb-2 italic">
  <span>Research Assistant</span>
  <span class="text-muted small">Hangzhou, China</span>
</div>
<div class="mb-3 small">
  ◦ Conducted research at the intersection of neuromorphic computing, event-driven perception, and RL.<br>
  ◦ Developed spiking models for point-cloud recognition, imitation learning, and ANN-SNN calibration.<br>
  ◦ Contributed to efficient neural computation methods for real-time sensing and decision-making.
</div>

---

## <i class="fas fa-project-diagram me-2 text-primary"></i>PROJECTS

<div class="d-flex justify-content-between mb-1">
  <strong>Activation-wise Propagation (AMP2): A One-Timestep Strategy for SNNs</strong>
  <span class="text-muted">2024 – 2025</span>
</div>
<div class="mb-3 small">
  <em>Spiking neural networks</em><br>
  ◦ One-timestep SNN training with activation-wise propagation across MLP, CNN, and Transformer backbones.<br>
  ◦ Applied to point-cloud and event-stream recognition with better ModelNet40 and ScanObjectNN results.
</div>

<div class="d-flex justify-content-between mb-1">
  <strong>SpikeCEIL: Spiking Contextual Imitation Learning for Continuous Control</strong>
  <span class="text-muted">2023 – 2025</span>
</div>
<div class="mb-3 small">
  <em>Imitation learning</em><br>
  ◦ Spiking CEIL for online/offline imitation learning in continuous control.<br>
  ◦ Added lfd/lfo support, source/target evaluation, and MuJoCo training scripts.
</div>

<div class="d-flex justify-content-between mb-1">
  <strong>Adaptive Spiking TD3+BC for Offline-to-Online Fine-Tuning</strong>
  <span class="text-muted">2024 – 2025</span>
</div>
<div class="mb-3 small">
  <em>Offline-to-online RL</em><br>
  ◦ Adaptive offline-to-online fine-tuning Spiking RL.<br>
  ◦ Combined D4RL distillation, REDQ-style critics, and behavior cloning for stable MuJoCo experiments.
</div>

<div class="d-flex justify-content-between mb-1">
  <strong>Spiking TD3 / TD3+BC Baselines</strong>
  <span class="text-muted">2023 – 2025</span>
</div>
<div class="mb-3 small">
  <em>Continuous control</em><br>
  ◦ Spiking actor-critic baselines for TD3, DDPG, and TD3+BC.<br>
  ◦ Added membrane-state handling and replay-buffer pipelines for stable SNN training.
</div>

---

## <i class="fas fa-tools me-2 text-primary"></i>SKILLS
- **Programming**: Python, PyTorch, Bash
- **Learning & Modeling**: Deep Reinforcement Learning, Offline RL, Imitation Learning, SNNs, ANN-to-SNN Calibration
- **Robotics & Perception**: Event Cameras, Point Clouds, VLA, World Models, Physical Interaction Modeling
- **Frameworks**: SpikingJelly, Gym, D4RL, TensorBoardX, Weights & Biases
- **Languages**: Mandarin (native), English (fluent)

---

## <i class="fas fa-award me-2 text-primary"></i>HONORS AND AWARDS

<div class="d-flex justify-content-between mb-1">
  <span><strong>CCNU Eighty-Two Academic Excellence Scholarship</strong> — School of Life Science</span>
  <span class="text-muted">Mar. 2019</span>
</div>

<div class="d-flex justify-content-between mb-1">
  <span><strong>CCNU Mathematics Modeling Summer Camp Competition, 2nd Prize</strong> — School of Mathematics</span>
  <span class="text-muted">Jan. 2020</span>
</div>

<div class="d-flex justify-content-between mb-1">
  <span><strong>National Excellent Project</strong> — Undergraduate Innovation Training Program; PHR1 gene senescence project</span>
  <span class="text-muted">Oct. 2019</span>
</div>

<div class="d-flex justify-content-between mb-1">
  <span><strong>Biological Experiment 3rd Prize</strong> — Hubei Province Experimental Skills Competition</span>
  <span class="text-muted">Oct. 2018</span>
</div>

<style>
  .italic { font-style: italic; }
  h2 { margin-top: 2rem !important; border-bottom: 2px solid #007bff22; padding-bottom: 0.5rem; }
  .contact-info a { color: inherit; text-decoration: none; border-bottom: 1px dotted #868e96; }
  .contact-info a:hover { color: var(--primary-color); border-bottom-style: solid; }
</style>
