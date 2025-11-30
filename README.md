# jupyterlab-singleton-consumer

Example of a JupyterLab extension that consumes e.g. a webcomponent singleton registered by another extension

[![Build Status](https://github.com/timkpaine/jupyterlab-singleton-consumer/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/timkpaine/jupyterlab-singleton-consumer/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/timkpaine/jupyterlab-singleton-consumer/branch/main/graph/badge.svg)](https://codecov.io/gh/timkpaine/jupyterlab-singleton-consumer)
[![License](https://img.shields.io/github/license/timkpaine/jupyterlab-singleton-consumer)](https://github.com/timkpaine/jupyterlab-singleton-consumer)
[![PyPI](https://img.shields.io/pypi/v/jupyterlab-singleton-consumer.svg)](https://pypi.python.org/pypi/jupyterlab-singleton-consumer)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/timkpaine/jupyterlab-singleton-consumer/main?urlpath=lab)

## Overview

This repo demonstrates how to create a JupyterLab extension which consumes a singleton service from another extension.
In this case, we're not actually using a service, but instead a singleton WebComponent.

An example provider is implemented in [jupyterlab-singleton-provider](https://github.com/timkpaine/jupyterlab-singleton-provider).

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
