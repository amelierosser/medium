import * as GL from '../core/GL';

let gl;

export default class Vao {
	constructor() {
		gl = GL.get();
		this.vao = gl.createVertexArray();
	}

	bind() {
		gl.bindVertexArray(this.vao);
	}

	unbind() {
		gl.bindVertexArray(null);
	}

	dispose() {
		gl.deleteVertexArray(this.vao);
		this.vao = null;
	}
}
